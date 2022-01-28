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
  loop: false,
  choices: ['View All Employees', 'View All Roles', 'View All Departments', 'Add Employees','Add Role', 'Add Department', 'Update Employee',  'Quit']
}

const { displayEmployeeTable,
      displayRoleTable,
      displayDepartmentTable,
      getNewEmployeeInfo,
      getNewRoleInfo,
      getNewDepartmentInfo,
      updateEmployee } = require('./assets/index.js');


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


    if(selected === 'View All Employees') {
      viewEmployees();
    }
    if(selected === 'Add Employees') {
      addEmployees();
    }
    if(selected === 'Update Employee') { 
     updateRole();
    }
    if(selected === 'View All Roles'){
      viewRoles(); 
    }
    if(selected === 'Add Role'){
      addRole();
    }
    if(selected === 'View All Departments'){
      viewDepartments();
    }
    if(selected === 'Add Department'){
      addDepartment();
    }
    if(selected === 'Quit'){
      quit();
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
  await displayRoleTable();
  await getNewEmployeeInfo();
  manipulateDB();
}


async function addRole() {

  await displayRoleTable();
  await getNewRoleInfo();
  manipulateDB();
}



async function addDepartment() {

  await displayDepartmentTable();
  await getNewDepartmentInfo();
  manipulateDB();
}


async function updateRole() {

  await updateEmployee();
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

