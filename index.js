// comes with node when it's downloaded
const path = require("path"); //allows you to navigate through the paths of your directory
const fs = require("fs");
const render = require("./src/page-template.js");
// THIS IS WHERE YOUR MAIN LOGIC WILL LIE
// you would first require ALL of the files and node packages needed
// manager, intern, engineer
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const inquirer = require("inquirer");
// THIS IS WHERE YOU DO YOUR FS WRITEFILE STUFF
// the dist folder is where the output html files will land
// wherever i end up, i want to end up in the dist folder
const OUTPUT_DIR = path.resolve(__dirname, "dist");
// in my dist folder, i want to create a team.html
const outputPath = path.join(OUTPUT_DIR, "team.html");
//And now, we can use that pageTemplate as a function, which can ACCEPT a parameter
pageTemplate(team);

// INDEX FILES ARE CONSIDERED THE ENTRY POINT TO YOUR APP
// IF THIS IS YOUR ENTRY POINT, YOU MUST DO YOUR INQUIRER HERE

class Engineer {
  constructor(id, username) {
    this.id = id;
    this.username - username;
  }
}

const membersArray = [];

function runApp() {
  //   ...Inquirer prompt and the functions that will ask users about manager, intern, and engineer.
  function createManager() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "managerName",
          message: "What is your manager's name?",
        },
        {
          type: "input",
          name: "managerID",
          message: "What is your manager's id?",
        },
        {
          type: "input",
          name: "managerEmail",
          message: "What is your manager's email?",
        },
        {
          type: "input",
          name: "managerOfficeNum",
          message: "What is your manager's office number?",
        },
      ])
      .then((answers) => {
        //How can I store this info based on manager, engineer, and intern?
        // Where can I store this to call this info later on?
        console.log(answers);
        const manager = new Manager(
          answers.managerName,
          answers.managerID,
          answers.managerEmail,
          answers.managerOfficeNum
        );
        console.log(manager);
        membersArray.push(manager);
        console.log(membersArray);
        buildTeam();
      });
  }

  function buildTeam() {
    // Create the output directory if the output path doesn't exist
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR); // creates a directory if it doesn't exist
    }
    // looking for path to dist folder
    fs.writeFileSync(outputPath, render(membersArray), "utf-8");
  }
  buildTeam();
}

runApp();
