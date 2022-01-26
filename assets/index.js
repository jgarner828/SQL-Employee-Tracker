const inquirer = require('inquirer');
const mysql = require('mysql2');

// create the connection to mySQL database
const db = mysql.createConnection({
  host: 'localhost',
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: 'employee_db'
});


function displayEmployeeTable() {

  db.query('SELECT * FROM employee', (err, rows) => {
    if(err) {
      console.log(err)
    } else  {
      console.table(rows);
      console.log('\n');
    }
  })
}
  
function displayRoleTable() {
    db.query('SELECT * FROM role', (err, rows) => {
      if(err) {
        console.log(err)
      } else  {
        console.table(rows);
        console.log('\n');
      }
    })
  }
  
function displayDepartmentTable() {

    db.query('SELECT * FROM department', (err, rows) => {
      if(err) {
        console.log(err)
      } else  {
        console.table(rows);
        console.log('\n');
      }
    })
  }
  
function getNewEmployeeInfo() {
    console.log("getNewEmployeeInfo")
  }
  
function updateEmployeeTable() {
    console.log("updateEmployeeTable")
  }
  
function getNewRoleInfo() {
    console.log("getNewRoleInfo")
  }
  
function updateRoleTable() {
    console.log("updateRoleTable")
  }
  
function getNewDepartmentInfo() {
    console.log("getNewDepartmentInfo")
  }
  
function updateDepartmentTable() {
    console.log("updateDepartmentTable")
}

function selectEmployeefromTable() {
  console.log("selectEmployeefromTable")
}

function getNewRole() {
    console.log("getNewRole")
  }
  
module.exports = { displayEmployeeTable,
  displayRoleTable,
  displayDepartmentTable,
  getNewEmployeeInfo,
  updateEmployeeTable,
  getNewRoleInfo,
  getNewDepartmentInfo,
  updateDepartmentTable,
  selectEmployeefromTable,
  getNewRole,
  updateRoleTable }