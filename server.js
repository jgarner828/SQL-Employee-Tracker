const inquirer = require('inquirer');
const mysql = require('mysql2');
const CFonts = require('cfonts');


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
  choices: ['View All Employees', 'View All Roles', 'View All Departments', 'Add Employees','Add Role', 'Add Department', 'Update Employee', 'Delete Employee',  'Quit']
}

const { displayEmployeeTable,
      displayRoleTable,
      displayDepartmentTable,
      getNewEmployeeInfo,
      getNewRoleInfo,
      getNewDepartmentInfo,
      updateEmployee,
      deleteAEmployee } = require('./assets/index.js');


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
    if(selected === 'Delete Employee'){
      deleteEmployee();
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
  await displayEmployeeTable();
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
  await displayEmployeeTable();
  await updateEmployee();
  manipulateDB();
}


async function deleteEmployee() {
  await displayEmployeeTable();
  await deleteAEmployee();
  manipulateDB();
}



function quit() {
  process.exit();
}



// 
// 
// START OF CODE
// 
//


CFonts.say('Employee Tracker', {
	font: 'block',              // define the font face
	align: 'left',              // define text alignment
	colors: ['#ce2029'],         // define all colors
	background: 'transparent',  // define the background color, you can also use `backgroundColor` here as key
	letterSpacing: 1,           // define letter spacing
	lineHeight: 1,              // define the line height
	space: true,                // define if the output text should have empty lines on top and on the bottom
	maxLength: '9',             // define how many character can be on one line
	gradient: false,            // define your two gradient colors
	independentGradient: false, // define if you want to recalculate the gradient for each new line
	transitionGradient: false,  // define if this is a transition between colors directly
	env: 'node'                 // define the environment CFonts is being executed in
});


manipulateDB();

