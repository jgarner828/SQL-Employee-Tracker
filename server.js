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




inquirer
  .prompt(selectOption)
  .then((answer) => {
    console.log(answer);
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });