// require Intern class for test
const Intern = require("../lib/Intern.js");

describe("Intern", () => {
    // test to determine if new Intern object is created
    describe("object", () => {
        it("should create a new Intern object", () => {
            const intObj = new Intern('Phil', 54, 'email@email.com', 'Hard Knocks')
            expect(intObj.name).toEqual('Phil');
            expect(intObj.id).toEqual(54);
            expect(intObj.email).toEqual('email@email.com');
            expect(intObj.school).toEqual('Hard Knocks');
        })
    });
    // test to determine if school is returned
    describe("getSchool()", () => {
        it("should return the school", () => {
            const intObj = new Intern('Phil', 54, 'email@email.com', 'Hard Knocks')
            // getSchool() result expectation
            expect(intObj.getSchool()).toEqual('Hard Knocks');
        })
    });
    // test to determine if role is returned
    describe("getRole()", () => {
        it("should return Intern", () => {
            const intObj = new Intern('Phil', 54, 'email@email.com', 'Hard Knocks')
            // getRole() result expectation
            expect(intObj.getRole()).toEqual('Intern');
        })
    });
})