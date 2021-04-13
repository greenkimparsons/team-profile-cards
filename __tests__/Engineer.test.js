const Engineer = require("../lib/Engineer");

describe("Tests to see if Engineer Class exists", () => {
    it("should be an object", () => {
        //ARRANGE
        //ACT
        const engineerObject = new Engineer();
        //ASSERT
        expect(typeof engineerObject).toBe("object");
    });

    it("should take in a name", () => {
        const name = "Green";
        const engineerObject = new Engineer("Green");
        expect(engineerObject.name).toBe(name);
    });
});