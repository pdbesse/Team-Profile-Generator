// need 
// name
// id
// email
// getName()
// getID()
// getEmail()
// getRole() - returns 'Employee'
// add validation

// define Employee class object
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
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
    // returns "Employee"
    getRole() {
        return "Employee";
    }
}
// enable class to be exported
module.exports = Employee;