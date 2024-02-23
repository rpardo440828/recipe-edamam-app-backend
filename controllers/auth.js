import { db } from "../db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

//Register a new user
export const register = (req, res)=>{
    //Check if user exists
    const q = "SELECT * FROM users WHERE username = ? OR email = ?";
    db.query(q, [req.body.username, req.body.email], (err, data)=>{
        //If error occurs send it, or if data is returned then user already exists
        if(err) return res.json(err);
        if(data.length) return res.status(409).json("User already exists!");

        //Hash password using bcryptjs and create user
        var salt = bcrypt.genSaltSync(10);
        var hash = bcrypt.hashSync(req.body.password, salt);

        const q = "INSERT INTO users(`username`, `email`, `password`) VALUES (?)";
        const values = [
            req.body.username,
            req.body.email,
            hash,
        ];
        db.query(q, [values], (err,data)=>{
            if(err) return res.status(err);
            return res.status(200).json("User was created!");
        });
    })
};

//Function to log into website
export const login = (req, res)=>{
    //Check if user exists, then return error if it is not detected
    const q = "SELECT * FROM users WHERE username = ?";
    db.query(q, req.body.username, (err,data)=>{
        if(err) return res.json(err);
        if(data.length === 0) return res.status(404).json("User was not found");

        //Check if password is correct
        const isPasswordCorrect = bcrypt.compareSync(req.body.password, data[0].password);
        if(!isPasswordCorrect) return res.status(400).json("Wrong username or password!");

        //Create a cookie access token for the user
        const token = jwt.sign({id:data[0].id}, "jwtkey");
        const {password, ...other} = data[0];

        //Sends the access token to the webpage
        res.cookie("access_token", token, {
            httpOnly: true,
        }).status(200).json(other);
    });
};

//Function to logout the user
export const logout = (req, res)=>{
    res.clearCookie("access_token", {
        sameSite: "none",
        secure: true,
    }).status(200).json("User has been logged out.");
};