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
    const employeeName = new Employee("Green");
    expect(employeeName.name).toBe(name);
  });

  it("should take in an id", () => {
    const id = 2;
    const employeeID = new Employee(2);
    expect(employeeID.id).toBe(id);
  });

  it("should take in an email", () => {
    const email = "@";
    const employeeEmail = new Employee("@");
    expect(employeeEmail.email).toBe(email);
  });
});
