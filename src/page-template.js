const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const Manager = require("../lib/Manager");
// generate the HTML pages
const generateTeam = (team) => {

  // A method for a template to render engineer info
  const createEngineer = (engineer) => {
    return `
    <div class="card" style="width: 18rem">
        <div class="card-body text-dark bg-info">
        <h5 class="card-title">${engineer.name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${engineer.getRole()}</h6>
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
        <div class="card-body text-white bg-success">
        <h5 class="card-title">${intern.name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${intern.getRole()}</h6>
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
        <div class="card-body text-dark bg-warning">
        <h5 class="card-title">${manager.name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${manager.getRole()}</h6>
        <ul class="card-text">
            <li class="card-text-item">${manager.id}</li>
            <li class="card-text-item">${manager.email}</li>
            <li class="card-text-item">${manager.officeNum}</li>
        </ul>
        </div>
    </div>`;
  };

  const htmlIndex = [];
  htmlIndex.push(
    team
      .filter((employee) => employee.getRole() === "Engineer")
      .map((engineer) => createEngineer(engineer))
  );
  htmlIndex.push(
    team
      .filter((employee) => employee.getRole() === "Intern")
      .map((intern) => createIntern(intern))
  );
  htmlIndex.push(
    team
      .filter((employee) => employee.getRole() === "Manager")
      .map((manager) => createManager(manager))
  );
  return htmlIndex.join("");
};

// We are exporting out an anonymous function
module.exports = (team) => {
  return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
<script src="https://kit.fontawesome.com/c502137733.js"></script>
    <title>Document</title>
</head>
<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3 team-heading bg-dark text-white">
                <h1 class="text-center">My Team</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="team-area col-12 d-flex justify-content-center">
                ${generateTeam(team)}
            </div>
        </div>
    </div>
</body>
</html>
    `;
};
