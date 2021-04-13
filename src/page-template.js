const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const Manager = require("../lib/Manager");
// generate the HTML pages
const generateTeam = (team) => {
  const html = "";
  team.forEach((employee) => {
    if (employee.getRole() === "Engineer") {
      html += createEngineer(employee);
    }
    if (employee.getRole() === "Intern") {
      html += createIntern(employee);
    }
    if (employee.getRole() === "Manager") {
      html += createManager(employee);
    }
  });
  generateFinalHTML(html);
};
// A method for a template to render manager info

// A method for a template to render engineer info

// A method for a template to render intern info
const createEngineer = (engineer) => {
  return `
    <div class="card" style="width: 18rem">
        <div class="card-body">
        <h5 class="card-title">${engineer.name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${engineer.getRole}</h6>
        <ul class="card-text">
            <li class="card-text-item">${engineer.id}</li>
            <li class="card-text-item">${engineer.email}</li>
            <li class="card-text-item">${engineer.github}</li>
        </ul>
        </div>
    </div>`;
};

const createIntern = (intern) => {
  return `
    <div class="card" style="width: 18rem">
        <div class="card-body">
        <h5 class="card-title">${intern.name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${intern.getRole}</h6>
        <ul class="card-text">
            <li class="card-text-item">${intern.id}</li>
            <li class="card-text-item">${intern.email}</li>
            <li class="card-text-item">${intern.school}</li>
        </ul>
        </div>
    </div>`;
};

const createManager = (manager) => {
  return `
    <div class="card" style="width: 18rem">
        <div class="card-body">
        <h5 class="card-title">${manager.name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${manager.getRole}</h6>
        <ul class="card-text">
            <li class="card-text-item">${manager.id}</li>
            <li class="card-text-item">${manager.email}</li>
            <li class="card-text-item">${manager.officeNum}</li>
        </ul>
        </div>
    </div>`;
};

const html = [];
html.push(
  team
    .filter((employee) => employee.getRole() === "Manager")
    .map((manager) => createManager(manager))
);
return html.join("");

// We are exporting out an anonymous function
module.exports = (team) => {
  return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" cross origin="anonymous">
<script src="https://kit.fontawesome.com/c502137733.js"></script>
    <title>Document</title>
</head>
<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3 team-heading">
                <h1 class="text-center">My Team</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="team-area col-12 d-flex justify-content-center">
                YOUR METHOD GOES HERE THE CARDS OF MANAGER, INTERN, ENGINEER WILL BE. 
                ${someFunction(team)}
            </div>
        </div>
    </div>
</body>
</html>
    `;
};
