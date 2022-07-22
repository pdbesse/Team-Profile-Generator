// requires Employee class
const Employee = require("./Employee.js");
// Engineer extends Employee class
class Engineer extends Employee {
    constructor(name, id, email, github) {
        // pull name, id, email from Employee class
        super(name, id, email)
        this.github = github;
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
    // returns github username
    getGitHub() {
        return this.github;
    }
    // returns "Engineer"
    getRole() {
        return "Engineer";
    }
}
// enable class to be exported
module.exports = Engineer;