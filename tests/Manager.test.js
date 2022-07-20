const Manager = require("../lib/Manager.js");

describe("Manager", () => {
    describe("object", () => {
        it("should create a new Manager object", () => {
            const manObj = new Manager('Phil', 54, 'email@email.com', 808)
            expect(manObj.name).toEqual('Phil');
            expect(manObj.id).toEqual(54);
            expect(manObj.email).toEqual('email@email.com');
            expect(manObj.officeNum).toEqual(808);
        })
    });
    describe("getOfficeNum", () => {
        it("should return the office number", () => {
            const manObj = new Manager('Phil', 54, 'email@email.com', 808)
            expect(manObj.getOfficeNum()).toEqual(808);
        })
    });
    describe("getRole()", () => {
        it("should return Manager", () => {
            const manObj = new Manager('Phil', 54, 'email@email.com', 808)
            expect(manObj.getRole()).toEqual('Manager');
        })
    });
    describe("", () => {
        it("", () => {

            expect();
        })
    });
})