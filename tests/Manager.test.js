// require Manager class for test
const Manager = require("../lib/Manager.js");

describe("Manager", () => {
    describe("object", () => {
        it("should create a new Manager object", () => {
            // test to determine if new Manager object is created
            const manObj = new Manager('Phil', 54, 'email@email.com', 808)
            expect(manObj.name).toEqual('Phil');
            expect(manObj.id).toEqual(54);
            expect(manObj.email).toEqual('email@email.com');
            expect(manObj.officeNum).toEqual(808);
        })
    });
    // test to determine if office number is returned
    describe("getOfficeNum()", () => {
        it("should return the office number", () => {
            const manObj = new Manager('Phil', 54, 'email@email.com', 808)
            // getOfficeNum() result expectation
            expect(manObj.getOfficeNum()).toEqual(808);
        })
    });
    // test to determine if role is returned
    describe("getRole()", () => {
        it("should return Manager", () => {
            const manObj = new Manager('Phil', 54, 'email@email.com', 808)
            // getRole() result expectation
            expect(manObj.getRole()).toEqual('Manager');
        })
    });
})