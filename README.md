# Team Profile Generator

## Description

This app is a node.js program designed to write a team profile .html page from various user prompts. 

---

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Code Snippets](#code-snippets)
* [Technology](#technology)
* [Credits](#credits)
* [Testing](#testing)
* [License](#license)

---

## Installation

The files for this program can be downloaded [here]https://github.com/pdbesse/Team-Profile-Generator/archive/refs/heads/main.zip). 

This app requires node.js to be installed. For download and installation instructions, please see [nodejs.org](https://nodejs.org/en/download/).

This app also requires Inquirer and Jest to be installed. To do this, open the terminal and navigate to the extracted folder. Open terminal in the folder and enter: 
```
npm install
```
This will download any modules required for the app to work. Still in the console, enter:
```
node index.js
```
This will launch the program.

---

## Usage

![usage-gif]()

Upon running the index.js file in node, the user is prompted to enter the team manager's name, ID number, email, and office number. The user then selects if they would like to add another employee. If yes, the user is prompted to choose between an engineer or an intern. If no, the teampage.html file is written.

For an engineer, the user is prompted to enter the name, ID number, email, and GitHub profile. For an intern, the user is prompted to enter the name, ID number, email, and school.

You may view a video of the application being used [here]().

---

## Code Snippets

```javascript
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
            const { name, id, email, officeNum } = managerData;
            const manager = new Manager(name, id, email, officeNum);

            teamArr.push(manager);
            addEmployee();
        })
}
```
The addManager() function prompts the user to enter the manager's information. It then uses the response data to create a new Manager object, which is pushed to the empty team array. Finally, it runs the addEmployee() function.

```javascript
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
```
The addEmployee() function prompts the user if another employee should be entered. If the user selects yes, the user is prompted to choose between an engineer or an intern. The corresponding function is then run.

If no is selected, the writeToFile() function is run to generate the page.

```javascript
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
            const { name, id, email, github } = engineerData;
            const engineer = new Engineer(name, id, email, github);

            teamArr.push(engineer);
            addEmployee();
        })
}
```
The addEngineer() function prompts the user for the engineer's information. A new Engineer object is created and pushed to the team array. addEmployee() is executed to determine if more employees should be added.

The addIntern() function is identical, aside from prompting the user to enter a school instead of a GitHub username.

```javascript
function renderManager(manager) {
    return `
<div class="container col">
    <!-- card -->
    <div class="card">
        <!-- card body -->
        <div class="card-body">
            <!-- Name -->
            <h3 class="card-title text-center">${manager.name}</h3>
            <!-- ID Number -->
            <h5 class="card-title">Manager</h5>
            <!-- ID Number -->
            <p class="card-text">ID Number: ${manager.id}</p>
            <!-- Email -->
            <p class="card-text">Email: ${manager.email}</p>
            <!-- Office Number -->
            <p class="card-text">Office Number: ${manager.officeNum}</p>
        </div>
    </div>
</div>
`
}
```
The renderManager() function returns a template literal string, the contents of which create an HTML card containing the manager's information. This information is retrieved from the manager object.

The app also uses renderEngineer() and renderIntern(), which behave in the same way.

```javascript
function generateTeam(teamArr) {
    var renderSTR = ''

    for (let i = 0; i < teamArr.length; i++) {
        const employee = teamArr[i];
        const role = employee.getRole();
        if (role === 'Manager') {
            let tempMan = renderManager(employee);
            renderSTR = renderSTR + tempMan;
        }
        if (role === 'Engineer') {
            let tempEng = renderEngineer(employee);
            renderSTR = renderSTR + tempEng;
        }
        if (role === 'Intern') {
            let tempInt = renderIntern(employee);
            renderSTR = renderSTR + tempInt;
        }
    }
    return renderSTR;
}
```
The generateTeam() function takes in the team array. An empty string is created and will contain the HTML code for each generated employee card.

A for loop is used to iterate through the team array. For each element, the role is returned via getRole(). Depending on the value of the role, the element is then passed into the corresponding render_____() function. The returned string is then added to renderSTR. 

```javascript
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return "Employee";
    }
}
```
This code block defines the parent class Employee from which the Manager, Engineer, and Intern subclasses are derived. Keys in the object are given values, and the getName(), getId(), and getEmail() functions return the corresponding info. getRole() assigns the value "Employee".

```javascript
const Employee = require("./Employee.js");
class Manager extends Employee {
    constructor(name, id, email, officeNum) {
        super(name, id, email)
        this.officeNum = officeNum;
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getOfficeNum() {
    }
    getRole() {
        return "Manager";
    }
}
```
This code block defines the Manager sub-class. Name, id, and email are derived from the Employee class. The Manager sub-class has its own property, office number. getRole() overrides "Employee" with "Manager".

This is repeated for the Engineer and Intern sub-classes.

```javascript
const Employee = require("../lib/Employee.js");

describe("Employee", () => {
    describe("object", () => {
        it("should create a new Employee object", () => {
            const empObj = new Employee('Phil', 54, 'email@email.com')
            expect(empObj.name).toEqual('Phil');
            expect(empObj.id).toEqual(54);
            expect(empObj.email).toEqual('email@email.com');
        })
    });
    describe("getName()", () => {
        it("should return the name", () => {
            const employee = new Employee('Phil');
            expect(employee.getName()).toEqual('Phil');
        })
    });
    describe("getId()", () => {
        it("should return the ID number", () => {
            const employee = new Employee('Phil', 55);
            expect(employee.getId()).toEqual(55);
        })
    });
    describe("getEmail()", () => {
        it("should return the email", () => {
            const employee = new Employee('Phil', 55, 'test@email.com');
            expect(employee.getEmail()).toEqual('test@email.com');
        })
    });
    describe("getRole()", () => {
        it("should return Employee", () => {
            const employee = new Employee('Phil', 55, 'test@email.com');
            expect(employee.getRole()).toEqual('Employee');
        })
    });
});

```
Employee.test.js tests the expected behavior of things defined in the Employee class. Tests are run for the creation of the object, as well as the execution of the getName(), getId(), getEmail() and getRole() functions.

```javascript
const Manager = require("../lib/Manager.js");

describe("Manager", () => {
    describe("object", () => {
        it("should create a new Manager object", () => {
            const manObj = new Manager('Phil', 54, 'email@email.com', 808)
            expect(manObj.name).toEqual('Phil');
            expect(manObj.id).toEqual(54);
            expect(manObj.email).toEqual('email@email.com');
            expect(manObj.officeNum).toEqual(808);
        })
    });
    describe("getOfficeNum()", () => {
        it("should return the office number", () => {
            const manObj = new Manager('Phil', 54, 'email@email.com', 808)
            expect(manObj.getOfficeNum()).toEqual(808);
        })
    });
    describe("getRole()", () => {
        it("should return Manager", () => {
            const manObj = new Manager('Phil', 54, 'email@email.com', 808)
            expect(manObj.getRole()).toEqual('Manager');
        })
    });
})
```
Manager.test.js tests the expected behavior of things defined in the Manager class. The class-specific functions are also tested.

This is repeated for Engineer.test.js and Intern.test.js.

---

## Technology

Technology Used:
* [GitHub](https://github.com/)
* [GitBash](https://gitforwindows.org/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [Javascipt](https://www.javascript.com/)
* [Bootstrap](https://getbootstrap.com/)
* [node.js](https://nodejs.org/en/)
* [Inquirer](https://www.npmjs.com/package/inquirer/)
* [File System - node.js](https://nodejs.org/api/fs.html)
* [Jest](https://jestjs.io/)

---

## Credits

All coding credited to Phillip Besse.  Javascript pseudocoded with tutor Joe Young and Maverick Wong.

Websites Referenced:
* [Nodejs.devs - FS](https://nodejs.dev/learn/the-nodejs-fs-module)
* [Nodejs.org - FS.writeFile](https://nodejs.org/dist/latest-v16.x/docs/api/fs.html#fswritefilefile-data-options-callback)
* [MDN Docs - Array.prototype.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

---

## Testing

The app's classes may be tested using jest. To do this, navigate to the parent folder in GitBash and type:
```
npm test
```
This will run the .test.js files found in the tests directory.

---

## License

Phillip Besse's Team Profile Generator is licensed under the [MIT License](https://choosealicense.com/licenses/mit/).

MIT License

Copyright (c) 2022 Phillip Besse

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

---