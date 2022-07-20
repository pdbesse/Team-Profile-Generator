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
    describe("Email()", () => {
        it("should return the email", () => {
            const employee = new Employee('Phil', 55, 'test@email.com');
            expect(employee.getEmail()).toEqual('test@email.com');
        })
    });
    describe("getRole()", () => {
        it("should return the role", () => {
            const employee = new Employee('Phil', 55, 'test@email.com');
            expect(employee.getRole()).toEqual('Employee');
        })
    });
});
