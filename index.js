const path = require("path");
const fs = require("fs");
// const render = require("./src/page-template.js");

const Employee = require("./lib/Employee");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const inquirer = require("inquirer");
const jest = require("jest");

const OUTPUT_DIR = path.resolve(__dirname, "dist");
const outputPath = path.join(OUTPUT_DIR, "team.html");
// pageTemplate(team);

// INDEX FILES ARE CONSIDERED THE ENTRY POINT TO YOUR APP
// IF THIS IS YOUR ENTRY POINT, YOU MUST DO YOUR INQUIRER HERE

const membersArray = [];

function runApp() {
  createAProfile();
  //   ...Inquirer prompt and the functions that will ask users about manager, intern, and engineer.
  function createAProfile() {
    inquirer
      .prompt([
        {
          type: "list",
          name: "employeeType",
          message: "I am creating a profile for?",
          choices: ["Engineer", "Intern", "Manager"],
        },
      ])
      .then((val) => {
        if (val.employeeType === "Engineer") {
          createEngineer();
        } else if (val.employeeType === "Intern") {
          createIntern();
        } else if (val.employeeType === "Manager") {
          createManager();
        }
      });
  }

  function createManager() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "managerName",
          message: "Type name of manager.",
        },
        {
          type: "input",
          name: "managerID",
          message: "Type manager's ID.",
        },
        {
          type: "input",
          name: "managerEmail",
          message: "Type manager's email.",
        },
        {
          type: "input",
          name: "managerOfficeNum",
          message: "Type manager's office number.",
        },
      ])
      .then((answers) => {
        //How can I store this info based on manager, engineer, and intern?
        // Where can I store this to call this info later on?
        console.log(answers);
        // const manager = new Manager(
        //   answers.managerName,
        //   answers.managerID,
        //   answers.managerEmail,
        //   answers.managerOfficeNum
        // );
        // console.log(manager);
        // membersArray.push(manager);
        // console.log(membersArray);
        // buildTeam();
      });
  }

  // function buildTeam() {
  //   // Create the output directory if the output path doesn't exist
  //   if (!fs.existsSync(OUTPUT_DIR)) {
  //     fs.mkdirSync(OUTPUT_DIR); // creates a directory if it doesn't exist
  //   }
  //   // looking for path to dist folder
  //   fs.writeFileSync(outputPath, render(membersArray), "utf-8");
  // }
  // buildTeam();
}

runApp();
