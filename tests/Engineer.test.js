const Engineer = require("../lib/Engineer.js");

describe("Engineer", () => {
    describe("object", () => {
        it("should create a new Engineer object", () => {
            const engObj = new Engineer('Phil', 54, 'email@email.com', 'gituser')
            expect(engObj.name).toEqual('Phil');
            expect(engObj.id).toEqual(54);
            expect(engObj.email).toEqual('email@email.com');
            expect(engObj.github).toEqual('gituser');
        })
    });
    describe("getGitHub()", () => {
        it("should return the username", () => {
            const engObj = new Engineer('Phil', 54, 'email@email.com', 'gituser')
            expect(engObj.getGitHub()).toEqual('gituser');
        })
    });
    describe("getRole()", () => {
        it("should return Engineer", () => {
            const engObj = new Engineer('Phil', 54, 'email@email.com', 'gituser')
            expect(engObj.getRole()).toEqual('Engineer');
        })
    });
    describe("", () => {
        it("", () => {

            expect();
        })
    });
})