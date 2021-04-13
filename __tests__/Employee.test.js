// We set our tests by importing in the files we're testing for.
const Employee = require("../lib/Employee");

// I start constructing my tests
describe("Tests to see if Employee Class exists", () => {
  it("should be an object", () => {
    //ARRANGE
    // I don't really have something to compare to
    //ACT
    const employeeObject = new Employee();
    //ASSERT
    expect(typeof employeeObject).toBe("object");
  });

  it("should take in a name", () => {
    //ARRANGE
    const name = "Green";
    //ACT
    const employeeObject = new Employee("Green");
    //ASSERT
    expect(employeeObject.name).toBe(name);
  });
});
