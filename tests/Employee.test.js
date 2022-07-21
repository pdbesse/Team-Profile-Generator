// require Employee class for test
const Employee = require("../lib/Employee.js");

describe("Employee", () => {
    // test to determine if new Employee object is created
    describe("object", () => {
        it("should create a new Employee object", () => {
            const empObj = new Employee('Phil', 54, 'email@email.com')
            // name expectation
            expect(empObj.name).toEqual('Phil');
            // id expectation
            expect(empObj.id).toEqual(54);
            // email expectation
            expect(empObj.email).toEqual('email@email.com');
        })
    });
    // test to determine if name is returned
    describe("getName()", () => {
        it("should return the name", () => {
            const employee = new Employee('Phil');
            // getName() result expectation
            expect(employee.getName()).toEqual('Phil');
        })
    });
    // test to determine if id is returned
    describe("getId()", () => {
        it("should return the ID number", () => {
            const employee = new Employee('Phil', 55);
            // getId() result expectation
            expect(employee.getId()).toEqual(55);
        })
    });
    // test to determine if email is returned
    describe("Email()", () => {
        it("should return the email", () => {
            const employee = new Employee('Phil', 55, 'test@email.com');
            // getEmail() result expectation
            expect(employee.getEmail()).toEqual('test@email.com');
        })
    });
    // test to determine if role is returned
    describe("getRole()", () => {
        it("should return Employee", () => {
            const employee = new Employee('Phil', 55, 'test@email.com');
            // getRole() result expectation
            expect(employee.getRole()).toEqual('Employee');
        })
    });
});
