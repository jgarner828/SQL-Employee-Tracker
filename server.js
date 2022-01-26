const inquirer = require('inquirer');
const mysql = require('mysql2');

//sets process.env variables
require('dotenv').config();


// create the connection to mySQL database
const db = mysql.createConnection({
    host: 'localhost',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: 'employee_db'
  });


// initial selection
const selectOption = {
  type: 'list',
  name: 'choice',
  message: 'What would you like to do?',
  choices: ['View All Employees', 'Add Employees', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department', 'Quit']
}

const { displayEmployeeTable,
      displayRoleTable,
      displayDepartmentTable,
      getNewEmployeeInfo,
      updateEmployeeTable,
      getNewRoleInfo,
      getNewDepartmentInfo,
      updateDepartmentTable,
      selectEmployeefromTable,
      getNewRole,
      updateRoleTable} = require('./assets/index.js');


// 
// 
// START OF FUNCTIONS
// 
// 

function manipulateDB() {

  console.log('\n');

  inquirer
    .prompt(selectOption)
    .then((answer) => {
      checkOption(answer.choice); 
    })
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


async function viewEmployees() {
  await displayEmployeeTable();
  manipulateDB();
}

async function viewRoles() {
  await displayRoleTable();
  manipulateDB();
}

async function viewDepartments() {
  await displayDepartmentTable();
  manipulateDB();
}


async function addEmployees() {

  await displayEmployeeTable();
  await getNewEmployeeInfo();
  await updateEmployeeTable();
  manipulateDB();
}


async function addRole() {

  await displayRoleTable();
  await getNewRoleInfo();
  await updateRoleTable();
  manipulateDB();
}



async function addDepartment() {

  await displayDepartmentTable();
  await getNewDepartmentInfo();
  await updateDepartmentTable();
  manipulateDB();
}


async function updateRole() {

  await selectEmployeefromTable();
  await getNewRole();
  await updateRoleTable();
  manipulateDB();
}



function quit() {
  return;
}



// 
// 
// START OF CODE
// 
// 

manipulateDB();
