
// packages needed
const db = require("./db/connection");
const promptUser = require("./prompt.js");
const mysql = require("mysql2");


// command-line prompt
promptUser()
    //.then(db.promise().query("SELECT * FROM department"))
    //.then(db.promise().query("SELECT * FROM roles"))
    //.then(db.promise().query("SELECT * FROM employee"))
    .then( ([rows, fields] ) => {
        console.log(rows);
    })
    .catch(console.log)
    .then( () => con.end() )