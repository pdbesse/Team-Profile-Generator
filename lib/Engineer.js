// need Employee class PLUS
// github - Github username
// getGithub()
// getRole() - overridden to return 'Engineer'
// add validation

const Employee = require("./Employee.js");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)
        this.github = github;
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

    getGitHub() {
        return this.github;
    }

    getRole() {
        return "Engineer";
    }
}
module.exports = Engineer;