// require Engineer class for test
const Engineer = require("../lib/Engineer.js");

describe("Engineer", () => {
    // test to determine if new Enginner object is created
    describe("object", () => {
        it("should create a new Engineer object", () => {
            const engObj = new Engineer('Phil', 54, 'email@email.com', 'gituser')
            expect(engObj.name).toEqual('Phil');
            expect(engObj.id).toEqual(54);
            expect(engObj.email).toEqual('email@email.com');
            expect(engObj.github).toEqual('gituser');
        })
    });
    // test to determine if github username is returned
    describe("getGitHub()", () => {
        it("should return the username", () => {
            const engObj = new Engineer('Phil', 54, 'email@email.com', 'gituser')
            // getGitHub() result expectation
            expect(engObj.getGitHub()).toEqual('gituser');
        })
    });
    // test to determine if role is returned
    describe("getRole()", () => {
        it("should return Engineer", () => {
            const engObj = new Engineer('Phil', 54, 'email@email.com', 'gituser')
            // getRole() result expectation
            expect(engObj.getRole()).toEqual('Engineer');
        })
    });
})