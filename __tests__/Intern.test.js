const Intern = require("../lib/Intern");

describe("Tests to see if Engineer Class exists", () => {
    it("should be an object", () => {
        const engineerObject = new Intern();
        expect(typeof internObject).toBe("object");
    });

    it("should take in a name", () => {
        const name = "Green";
        const internName = new Intern("Green");
        expect(internName.name).toBe(name);
    });

    it("should take in an id", () => {
        const id = 2;
        const internID = new Intern(2);
        expect(internID.id).toBe(id);
      });
    
    it("should take in an email", () => {
        const email = "@";
        const internEmail = new Intern("@");
        expect(internEmail.email).toBe(email);
    });

    it("should take in school", () => {
        const school = "@";
        const internSchool = new Intern("@");
        expect(internSchool.school).toBe(school);
    });
});