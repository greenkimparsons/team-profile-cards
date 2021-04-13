// Extend from Employee

const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNum) {
    //where we get it from Employee
    super(name, id, email);
    this.officeNum = officeNum;
  }

  getRole() {
    return "Manager";
  }

  getOfficeNum(){
      return this.officeNum;
  }
}

module.exports = Manager;
