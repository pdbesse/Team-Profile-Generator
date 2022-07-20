const Intern = require("../lib/Intern.js");

describe("Intern", () => {
    describe("object", () => {
        it("should create a new Intern object", () => {
            const intObj = new Intern('Phil', 54, 'email@email.com', 'Hard Knocks')
            expect(intObj.name).toEqual('Phil');
            expect(intObj.id).toEqual(54);
            expect(intObj.email).toEqual('email@email.com');
            expect(intObj.school).toEqual('Hard Knocks');
        })
    });
    describe("getSchool()", () => {
        it("should return the school", () => {
            const intObj = new Intern('Phil', 54, 'email@email.com', 'Hard Knocks')
            expect(intObj.getSchool()).toEqual('Hard Knocks');
        })
    });
    describe("getRole()", () => {
        it("should return Intern", () => {
            const intObj = new Intern('Phil', 54, 'email@email.com', 'Hard Knocks')
            expect(intObj.getRole()).toEqual('Intern');
        })
    });
    describe("", () => {
        it("", () => {

            expect();
        })
    });
})