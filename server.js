const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table');


// create the connection to mySQL database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'employee_db'
  });


// initial selection
const selectOption = {
  type: 'list',
  name: 'choice',
  message: 'What would you like to do?',
  choices: ['View All Employees', 'Add Employees', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department', 'Quit']
}



const manipulateDB = async function() {

  inquirer
    .prompt(selectOption)
    .then((answer) => {
      checkOption(answer.choice); 
    })
    .then()
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });

}

function checkOption(selected) {
  switch(selected) {
    case 'View All Employees': viewEmployees();
      break;
    case 'Add Employees': addEmployees();
      break;
    case 'Update Employee Role': updateRole();
      break;
    case 'View All Roles': viewRoles();
      break;
    case 'Add Role': addRole();
      break;
    case 'View All Departments': viewDepartments();
      break;
    case 'Add Department': addDepartment();
      break;
    case 'Quit': quit();
      break;
  }

}

const viewEmployees = async function() {
  console.log('in viewEmployees function\n');
  manipulateDB();
}

const addEmployees = async function() {
  console.log('in addEmployees function\n');
  manipulateDB();
}

const updateRole = async function() {
  console.log('in updateRole function\n');
  manipulateDB();
}

const viewRoles = async function() {
  console.log('in viewRoles function\n');
  manipulateDB();
}

const addRole = async function() {
  console.log('in addRole function\n');
  manipulateDB();
}

const viewDepartments = async function() {
  console.log('in viewDepartments function\n');
  manipulateDB();
}

const addDepartment = async function() {
  console.log('in addDepartment function\n');
  manipulateDB();
}

const quit = async function() {
  console.log('in quit function\n');
  return;
}




manipulateDB();
