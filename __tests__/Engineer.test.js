const Engineer = require("../lib/Engineer");

describe("Tests to see if Engineer Class exists", () => {
    it("should be an object", () => {
        const engineerObject = new Engineer();
        expect(typeof engineerObject).toBe("object");
    });

    it("should take in a name", () => {
        const name = "Green";
        const engineerName = new Engineer("Green");
        expect(engineerName.name).toBe(name);
    });

    it("should take in an id", () => {
        const id = 2;
        const engineerID = new Engineer(2);
        expect(engineerID.id).toBe(id);
      });
    
    it("should take in an email", () => {
        const email = "@";
        const engineerEmail = new Engineer("@");
        expect(engineerEmail.email).toBe(email);
    });

    it("should take in a github", () => {
        const github = "@";
        const engineerGithub = new Engineer("@");
        expect(engineerGithub.github).toBe(github);
    });
});