
const mysql = require("mysql2");

// connect to database
const db = mysql.createConnection(
    {
        host: "localhost",
        // username
        user: "root",
        // password
        password: "MySQLPassw0rd!",
        database: "employee-tracker"
    },
    console.log("Connected to the employee-tracker database.")
);

module.exports = db;