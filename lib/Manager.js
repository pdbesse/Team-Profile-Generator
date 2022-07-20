// need Employee class PLUS
// officeNumber
// getRole() - overriden to return Manager
// add validation

const Employee = require("./Employee.js");

class Manager extends Employee {
    constructor(name, id, email, officeNum) {
        super(name, id, email)
        this.name = name;
        this.id = id;
        this.email = email;
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

    getofficeNum() {
        return this.officeNum;
    }

    getRole() {
        return "Engineer";
    }
}

module.exports = Manager;