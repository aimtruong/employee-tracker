
// packages needed
const inquirer = require("inquirer");

// arrays for tables
let deptArray = [];
let roleArray = [];
let empArray = [];


// to export for server.js to use
module.exports = promptUser = () => {
    return inquirer.prompt([
        {
            // for user to pick task
            // will keep repeating
            type: "list",
            name: "ChoiceOptions",
            message: "What would you like to do? ",
            choices: ["View all departments", "View all roles", "View all employees", "Add a department", "Add a role", "Add an employee", "Update an Employee Role"]
        }
    ])
    .then(response => {
        // cases depending on task
        switch(response.ChoiceOptions){
            case "View all departments":
                console.table(deptArray);
                return promptUser(deptArray);
            case "View all roles":
                console.table(roleArray);
                return promptUser(roleArray);
            case "View all employees":
                console.table(empArray);
                return promptUser(empArray);
            case "Add a department":
                return inquirer.prompt([
                    {
                        type: "input",
                        name: "deptName",
                        message: "What is the name of the department? "
                    }
                ])
                .then(addDept => {
                    deptArray.push(addDept);
                    console.log(`Added department ${addDept.deptName} to the database`);
                    return promptUser(deptArray);
                });
            case "Add a role":
                return inquirer.prompt([
                    {
                        type: "input",
                        name: "roleName",
                        message: "What is the role's title? "
                    },
                    {
                        type: "input",
                        name: "roleSal",
                        message: "What is the role's salary? "
                    },
                    {
                        type: "input",
                        name: "roleDept",
                        message: "What is the role's department? "
                    }
                ])
                .then(addRole => {
                    roleArray.push(addRole);
                    console.log(`Added role ${addRole.roleName} to the database`);
                    return promptUser(roleArray);
                });
            case "Add an employee":
                return inquirer.prompt([
                    {
                        type: "input",
                        name: "empFn",
                        message: "What is the employee's first name? "
                    },
                    {
                        type: "input",
                        name: "empLn",
                        message: "What is the employee's last name? "
                    },
                    {
                        type: "input",
                        name: "empRole",
                        message: "What is the employee's role? "
                    },
                    {
                        type: "input",
                        name: "empMan",
                        message: "What is the employee's manager? (if none, press enter) "
                    }
                ])
                .then(addEmp => {
                    empArray.push(addEmp);
                    console.log(`Added ${addEmp.empFn} ${addEmp.empLn} to the database`);
                    return promptUser(empArray);
                });
            case "Update an Employee Role":
                return inquirer.prompt([
                    {
                        type: "list",
                        name: "empList",
                        message: "Which employee would you like to update? ",
                        choices: empArray
                    },
                    {
                        type: "input",
                        name: "empNR",
                        message: "What is the employee's new role? "
                    }
                ])
                .then(updateEmpRole => {
                    console.log(updateEmpRole);
                    console.log(`Updated ${updateEmpRole.empList}'s role to ${updateEmpRole.empNR} to the database`);
                    return promptUser(updateEmpRole);
                });
            }
    });
};
