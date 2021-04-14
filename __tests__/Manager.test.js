const Manager = require("../lib/Manager");

describe("Tests to see if Engineer Class exists", () => {
    it("should be an object", () => {
        const managerObject = new Manager();
        expect(typeof managerObject).toBe("object");
    });

    it("should take in a name", () => {
        const name = "Green";
        const managerName = new Manager("Green");
        expect(managerName.name).toBe(name);
    });

    it("should take in an id", () => {
        const id = 2;
        const managerID = new Manager(2);
        expect(managerID.id).toBe(id);
      });
    
    it("should take in an email", () => {
        const email = "@";
        const managerEmail = new Manager("@");
        expect(managerEmail.email).toBe(email);
    });

    it("should take in office number", () => {
        const officeNum = 678;
        const managerOfficeNum = new Manager(678);
        expect(managerOfficeNum.officeNum).toBe(officeNum);
    });
});