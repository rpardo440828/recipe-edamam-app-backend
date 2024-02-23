import mysql from "mysql";

export const db = mysql.createConnection({
    host:"us-cluster-east-01.k8s.cleardb.net",
    user:"bb1ce01d2d22d5",
    password:"4fb7b7f2",
    database:"heroku_2dc094344fcac2f"

    // host:"localhost",
    // user:"root",
    // password:"@Wildcats2019",
    // database:"recipeproj"
});

// mysql://bb1ce01d2d22d5:4fb7b7f2@us-cluster-east-01.k8s.cleardb.net/heroku_2dc094344fcac2f?reconnect=true