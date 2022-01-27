const inquirer = require('inquirer');
const mysql = require('mysql2');

// create the connection to mySQL database
const db = mysql.createConnection({
  host: 'localhost',
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: 'employee_db'
});




// 
// FUNCTIONS
// 

function displayEmployeeTable() {

  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM employee', (err, rows) => {
      if(err) {
        console.log(err);
        reject(err);
      } else  {
        console.log('\n');
        console.table(rows);
        console.log('\n');
        resolve();
      }
    })})
}
  


function displayRoleTable() {

    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM role', (err, rows) => {
      if(err) {
        console.log(err);
        reject(err);
      } else  {
        console.log('\n');
        console.table(rows);
        console.log('\n');
        resolve();
      }
    })})
}
  


function displayDepartmentTable() {

  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM department', (err, rows) => {
      if(err) {
        console.log(err);
        reject(err);
      } else  {
        console.log('\n');
        console.table(rows);
        console.log('\n');
        resolve();
      }
    })})
}
  



function getNewEmployeeInfo() {

  const newEmployee = [
    {
      type: 'input',
      name: 'first_name',
      message: "What is new employee's first name?",
      validate: function(answer) {
        if(answer.length < 1) {
          return console.log('You must enter in a first name.')
        }
        return true;
      }
    },
    {
      type: 'input',
      name: 'last_name',
      message: "What is new employee's last name?",
      validate: function(answer) {
        if(answer.length < 1) {
          return console.log('You must enter in a last name.')
        }
        return true;
      }
    },
    {
      type: 'input',
      name: 'role_id',
      message: "What is new employee's role ID?",
      validate: function(answer) {
        if(answer.length < 1) {
          return console.log('You must enter in an id')
        }
        return true;
      }
    },
    {
      type: 'input',
      name: 'manager_id',
      message: "What is new employee's manager ID (null if manager)",
      validate: function(answer) {
        if(answer.length < 1) {
          return console.log('You must enter in an id')
        }
        return true;
      }
    }
  ]

  return new Promise((resolve, reject) => {
  inquirer
  .prompt(newEmployee)

  .then((answers) => {
    // console.log(answers);
    db.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES  ("${answers.first_name}", "${answers.last_name}", ${answers.role_id}, ${answers.manager_id})`, (err, rows) => {
      if(err) {
        console.log(err)
        reject(err);
      } else  {
        console.log(`Successfully added ${answers.first_name} ${answers.last_name}\n`)
        resolve();

      }
    })
  })

  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
  })
}


  


function getNewRoleInfo() {
    console.log("getNewRoleInfo")
}
  


function getNewDepartmentInfo() {
  console.log("getNewDepartmentInfo")
}


function updateEmployeeTable(data) {
  console.log(data)
}



function updateRoleTable() {
    console.log("updateRoleTable")
}
  


function updateDepartmentTable() {
    console.log("updateDepartmentTable")
}



function selectEmployeefromTable() {
  console.log("selectEmployeefromTable")
}



  




module.exports = { displayEmployeeTable,
  displayRoleTable,
  displayDepartmentTable,
  getNewEmployeeInfo,
  getNewRoleInfo,
  getNewDepartmentInfo,
  selectEmployeefromTable }