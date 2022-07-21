// need Employee class PLUS
// officeNumber
// getRole() - overriden to return Manager
// add validation

// requires Employee class
const Employee = require("./Employee.js");
// Manager extends Employee class
class Manager extends Employee {
    constructor(name, id, email, officeNum) {
        // pull name, id, email from Employee class
        super(name, id, email)
        this.officeNum = officeNum;
    }
    // returns name
    getName() {
        return this.name;
    }
    // returns id
    getId() {
        return this.id;
    }
    // returns email
    getEmail() {
        return this.email;
    }
    // returns office number
    getOfficeNum() {
        return this.officeNum;
    }
    // returns "Manager"
    getRole() {
        return "Manager";
    }
}
// enable class to be exported
module.exports = Manager;