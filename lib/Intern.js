// requires Employee Class
const Employee = require("./Employee.js");
// Intern extends Employee class
class Intern extends Employee {
    constructor(name, id, email, school) {
        // pull name, id, email from Employee class
        super(name, id, email)
        this.school = school;
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
    // returns school
    getSchool() {
        return this.school;
    }
    // returns "Intern"
    getRole() {
        return "Intern";
    }
}
// enable class to be exported
module.exports = Intern;