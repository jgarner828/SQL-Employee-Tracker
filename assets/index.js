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
    })
  })
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
    
  const newRole = [
    {
      type: 'input',
      name: 'title',
      message: "What is new role?",
      validate: function(answer) {
        if(answer.length < 1) {
          return console.log('You must enter in a role.')
        }
        return true;
      }
    },
    {
      type: 'input',
      name: 'salary',
      message: "What is new role's salary?",
      validate: function(answer) {
        if(answer.length < 1) {
          return console.log('You must enter in a salary.')
        }
        return true;
      }
    },
    {
      type: 'input',
      name: 'department_id',
      message: "What is department id?",
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
    .prompt(newRole)
  
    .then((answers) => {
      // console.log(answers);
      db.query(`INSERT INTO role (title, salary, department_id) VALUES  ("${answers.title}", "${answers.salary}", ${answers.department_id})`, (err, rows) => {
        if(err) {
          console.log(err)
          reject(err);
        } else  {
          console.log(`Successfully added ${answers.title} in ${answers.department_id} for $${answers.salary}\n`)
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
  


function getNewDepartmentInfo() {
  
  const newDepartment = [
    {
      type: 'input',
      name: 'name',
      message: "What is new department name?",
      validate: function(answer) {
        if(answer.length < 1) {
          return console.log('You must enter in a department.')
        }
        return true;
      }
    }
  ]

  return new Promise((resolve, reject) => {
    inquirer
    .prompt(newDepartment)
  
    .then((answers) => {
      // console.log(answers);
      db.query(`INSERT INTO department (name) VALUES  ("${answers.name}")`, (err, rows) => {
        if(err) {
          console.log(err)
          reject(err);
        } else  {
          console.log(`Successfully added ${answers.name}\n`)
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




function updateEmployee() {

  const updateEmployeeQuestions = [
    {
      type: 'input',
      name: 'id',
      message: "What is the ID of the employee you would like to update?",
      validate: function(answer) {
        if(answer.length < 1) {
          return console.log('You must enter in an id.')
        }
        return true;
        }
    },
    {
      type: 'list',
      name: 'choice',
      message: 'What would you like to change?',
      loop: false,
      choices: ['first_name', 'last_name', 'role_id', 'manager_id']
    },
    {
      type: 'input',
      name: 'newValue',
      message: "What is the new value for this employee?",
      validate: function(answer) {
        if(answer.length < 1) {
          return console.log('You must enter in a value.')
        }
        return true;
        }
    }
  ];

  return new Promise((resolve, reject) => {

    inquirer
    .prompt(updateEmployeeQuestions)
  
    .then((answers) => {
      // console.log(answers);
      db.query(`UPDATE employee SET ${answers.choice} = "${answers.newValue}" WHERE id = ${answers.id}`, (err, rows) => {
        if(err) {
          console.log(err)
          reject(err);
        } else  {
          console.log(`Successfully added ${answers.newValue} in ${answers.choice} for $${answers.id}\n`)
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


function deleteAEmployee() {


 const deleteEmployeeId = [
    {
      type: 'input',
      name: 'id',
      message: "What is the ID of the employee you would like to delete?",
      validate: function(answer) {
        if(answer.length < 1) {
          return console.log('You must enter in an id.')
        }
        return true;
        }
    }
  ];

  return new Promise((resolve, reject) => {

    inquirer
    .prompt(deleteEmployeeId)
  
    .then((answers) => {
      // console.log(answers);
      db.query(`DELETE from employee WHERE id = ${answers.id}`, (err, rows) => {
        if(err) {
          console.log('You do not have permission to delete this user.')
          reject(err);
        } else  {
          console.log(`Successfully deleted id number: ${answers.id}`)
          resolve();
  
        }
      })
    })
  
    .catch((error) => {
      if (error.isTtyError) {
        console.log('You do not have permission to delete this user.')
      } else {
        // Something else went wrong
      }
    });
  })

}
  




module.exports = { displayEmployeeTable,
  displayRoleTable,
  displayDepartmentTable,
  getNewEmployeeInfo,
  getNewRoleInfo,
  getNewDepartmentInfo,
  updateEmployee,
  deleteAEmployee }