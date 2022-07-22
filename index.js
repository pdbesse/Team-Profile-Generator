// require Inquirer
const inquirer = require('inquirer');
// require fs
const fs = require('fs');
// require generatePage.js
const generatePage = require('./src/generatePage.js')
// require Employee class
const Employee = require('./lib/Employee.js')
// require Manager class
const Manager = require('./lib/Manager.js')
// require Engineer class
const Engineer = require('./lib/Engineer.js')
// require Intern class
const Intern = require('./lib/Intern.js')

// empty array to hold created objects
var teamArr = [];

// function initiates app; collects manager data
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
            // assign value to keys in the object
            const { name, id, email, officeNum } = managerData;
            // creates new Manager object
            const manager = new Manager(name, id, email, officeNum);
            // push created object to array
            teamArr.push(manager);
            // initiates addEmployee()
            addEmployee();
        })
}

// function to determine employee type
function addEmployee() {
    // prompt to enter another employee
    inquirer.prompt([
        {
            name: "empVal",
            message: "Would you like to add another employee?",
            type: "rawlist",
            choices: ["yes", "no"]
        }
    ])
        .then(response => {
            // if response is yes, choose engineer or intern
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
                        // if user chooses engineer, run addEngineer()
                        if (response.roleVal == "Engineer") {
                            addEngineer()
                            // else run addIntern()
                        } else {
                            addIntern()
                        }
                    })
                // if user chooses not to add another employee, write teampage.HTML with team array data
            } else {
                writeToFile('dist/teampage.HTML', teamArr);
            }

        })
}

// function to add engineer
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
            // assign values to keys in object
            const { name, id, email, github } = engineerData;
            // creates new Engineer object
            const engineer = new Engineer(name, id, email, github);
            // push created object to array
            teamArr.push(engineer);
            // run addEmployee() to determine what to do next
            addEmployee();
        })
}

// function to add intern
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
            // assign values to keys in object
            const { name, id, email, school } = internData;
            // creates new Intern object
            const intern = new Intern(name, id, email, school);
            // push created object to array
            teamArr.push(intern);
            //run addEmployee() to determine what to do next
            addEmployee();
        })
}

// defines writeToFile()
function writeToFile(fileName, data) {
    // write file with data from generatePage
    fs.writeFile(fileName, generatePage(data), (err) => err ? console.error(err) : console.log('Team Page generated!'));
}

// initiate the app
addManager();
