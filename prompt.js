
const inquirer = require("inquirer");


let deptArray = [];
let roleArray = [];
let empArray = [];


const promptUser = () => {

    return inquirer.prompt([
        {
            type: "list",
            name: "ChoiceOptions",
            message: "What would you like to do? ",
            choices: ["View all departments", "View all roles", "View all employees", "Add a department", "Add a role", "Add an employee", "Update an Employee Role"]
        }
    ])
    .then(response => {
        switch(response.ChoiceOptions){
            case "View all departments":
                console.table(deptArray);
                break;
            case "View all roles":
                console.table(roleArray);
                break;
            case "View all employees":
                console.table(empArray);
                break;
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
                    console.log(deptArray);
                    console.log(`Added department ${addDept.deptName} to the database`);
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
                    console.log(roleArray);
                    console.log(`Added role ${addRole.roleName} to the database`);
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
                    console.log(empArray);
                    console.log(`Added ${addEmp.empFn} ${addEmp.empLn} to the database`);
                });
            case "Update an Employee Role":
                return inquirer.prompt([
                    {
                        type: "list",
                        name: "empList",
                        message: "Which employee would you like to update? ",
                        choices: [empArray]
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
                });
            }
    });
};

promptUser()
    .catch(err => {
        console.log(err);
    });