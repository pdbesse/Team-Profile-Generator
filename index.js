const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./src/generatePage.js')
const Employee = require('./lib/Employee.js')
const Manager = require('./lib/Manager.js')
const Engineer = require('./lib/Engineer.js')
const Intern = require('./lib/Intern.js')

var teamArr = [];

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
            const {name, id, email, officeNum} = managerData;
            const manager = new Manager(name, id, email, officeNum);
            console.log(manager);

            teamArr.push(manager);
            addEmployee();
        })
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
                writeToFile('dist/teampage.HTML', teamArr);
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
            const {name, id, email, github} = engineerData;
            const engineer = new Engineer(name, id, email, github);
            console.log(engineer);

            teamArr.push(engineer);

            addEmployee();
        })
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
            const {name, id, email, school} = internData;
            const intern = new Intern(name, id, email, school);
            console.log(intern);

            teamArr.push(intern);
            

            addEmployee();
        })
}

function writeToFile(fileName, data) {
// fs.writeFile(fileName, generatePage(data), (err) => err ? console.error(err) : console.log('Team Page generated!'));
    generatePage(data);
}

addManager();

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
