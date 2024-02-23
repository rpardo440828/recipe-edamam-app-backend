import mysql from "mysql";

export const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"@Wildcats2019",
    database:"recipeproj"
});