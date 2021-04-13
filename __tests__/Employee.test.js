// We set our tests by importing in the files we're testing for.
const Employee = require("../lib/Employee");
const { TestScheduler } = require('@jest/core');


// I start constructing my tests
describe("Tests to see if Employee Class exists", () => {
  it("should be an object", () => {
    const employeeObject = new Employee();
    expect(typeof employeeObject).toBe("object");
  });

  it("should take in a name", () => {
    const name = "Green";
    const employeeObject = new Employee("Green");
    expect(employeeObject.name).toBe(name);
  });
});
