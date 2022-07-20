// need Employee class PLUS
// school
// getSchool()
// getRole() - overriden to return 'Intern'
// add validation

const Employee = require("./Employee.js");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)
        this.name = name;
        this.id = id;
        this.email = email;
        this.school = school;
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

    getSchool() {
        return this.school;
    }

    getRole() {
        return "Intern";
    }
}

module.exports = Intern;