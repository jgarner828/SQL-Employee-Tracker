const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table');
const { Resolver } = require('dns');

const PORT = process.env.PORT || 3001;


const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


// create the connection to mySQL database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'employee_'
  });


  //  INITIAL LOADING SCREEN......
  // DISPLAY EMPLOYEE MANAGER  IN LARGE BOX

// What would you like to do?
// View All Employees
// Add Employees
// Update Employee Role
// View All Roles 
// Add Role 
// View All Departments 
// Add Department 
// Quit
//
