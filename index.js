const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./src/generatePage.js')

function addManager() {
        inquirer.prompt([
            {
                name: "name",
                message: "What is your manager's name?",
                type: "input"
            },
            {
                name: "id",
                message: "What is your manager's ID number?",
                type: "input"
            },
            {
                name: "email",
                message: "What is your manager's email address?",
                type: "input"
            },
            {
                name: "officeNum",
                message: "What is your manager's office number?",
                type: "input"
            }
        ])
        .then(managerData => {
            // manager object?
            // push to empty array?
        })

        addEmployee();
    }


function addEmployee() {
    inquirer.prompt([
        {
            name: "empVal",
            message: "Would you like to add another employee?",
            type: "rawlist",
            choices: ["yes", "no"]
        }
    ])
    .then(response => {
        if (response.empVal == "yes") {
            inquirer.prompt([
                {
                    name: "roleVal",
                    message: "Is the employee an Engineer or an Intern?",
                    type: "rawlist",
                    choices: ["Engineer", "Intern"]
                }
                ])
                .then(response => {
                    if (response.roleVal == "Engineer") {
                        addEngineer()
                    } else {
                        addIntern()
                    }
                })
        } else {
            return;
        }
        
    })
}

function addEngineer() {
    inquirer.prompt([
        {
            name: "name",
            message: "What is your engineer's name?",
            type: "input"
        },
        {
            name: "id",
            message: "What is your engineer's ID number?",
            type: "input"
        },
        {
            name: "email",
            message: "What is your engineer's email address?",
            type: "input"
        },
        {
            name: "github",
            message: "What is your engineer's GitHub username?",
            type: "input"
        }
    ])
    .then(engineerData => {
        // engineer object?
        // push?
    })

    addEmployee();
}

function addIntern() {
    inquirer.prompt([
        {
            name: "name",
            message: "What is your intern's name?",
            type: "input"
        },
        {
            name: "id",
            message: "What is your intern's ID number?",
            type: "input"
        },
        {
            name: "email",
            message: "What is your intern's email address?",
            type: "input"
        },
        {
            name: "school",
            message: "What school does your intern attend?",
            type: "input"
        }
    ])
    .then(internData => {
        // engineer object?
        // push?
    })
    
    addEmployee();
}

function writeToFile() {

}

init(addManager());

// require inquirer and fs
// 
// addManager()
// 
// addEmployee()
    // choice between Engineer and Intern
    // if == 'Engineer', addEngineer()
    // if == 'Intern', addIntern()
    // at end of addEngineer() and addIntern()
        // add another employee
            // if yes, addEmployee()
            // if no, return
    // push created employee objects to array?
// 
// fs.writeFile to '/dist/employeepage.html'
