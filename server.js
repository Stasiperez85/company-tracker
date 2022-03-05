const inquirer = require('inquirer');
const db = require('./db/connection');

// db.query(`SELECT * FROM department`, (err, rows) => {
//     console.log(rows);
// });



const promptCompany = async () => {
    const answers = await inquirer
        .prompt([
            {
                type: "list",
                name: "options",
                message: "What would you like to do?",
                choices: [
                    "View Department",
                    "View Roles",
                    "View Employees",
                    "Add Department",
                    "Add Role",
                    "Add Employee",
                    "Update an employee role",
                ]
            }])

    switch (answers.options) {
        case 'View Department':
            viewDepartments();
            break;
        case 'View Roles':
            viewRoles();
            break;
        case 'View Employees':
            viewEmployees();
            break;

        case 'Add Department':
            addDepartment();
            break;
        case 'Add Role':
            addRole();
            break;
        case 'Add Employee':
            addEmployee();
            break;
        default:
            quit();
            console.log("Hello");
    }

};

promptCompany();

const viewDepartments = () => {
    db.query(`SELECT * FROM department`, (err, rows) => {
        if (err) throw err
        console.table(rows);
    });
}

const viewRoles = () => {
    db.query(`SELECT * FROM role`, (err, rows) => {
        if (err) throw err
        console.table(rows);
    });
}

const viewEmployees = () => {
    db.query(`SELECT employee.*, role.title, role.salary
    FROM employee
    JOIN role
    ON employee.role_id = role.id
    `, (err, rows) => {
        if (err) throw err
        console.table(rows);
    });
}

const addDepartment = async () => {
    const answers = await inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "What Department would you like to add?"
            }
        ]);
    db.query(`INSERT INTO department (name) VALUES (?)`, [answers.name], (err, rows) => {
        if (err) throw err
        console.table(rows);
        promptCompany();
    });
};

const addRole = async () => {
    const answers = await inquirer
        .prompt([
            {
                type: 'input',
                name: 'title',
                message: "What Role would you like to add?"
            },
            {
                type: 'input',
                name: 'salary',
                message: "What is the salary for the new Role"
            },
            {
                type: 'input',
                name: 'deptID',
                message: "What is the Department ID?"
            }
        ]);
    db.query(`INSERT INTO role (title, salary, department_id) VALUES (?,?,?)`, [answers.title, answers.salary, answers.deptID], (err, rows) => {
        if (err) throw err
        console.table(rows);
        promptCompany();
    });
};
const addEmployee = async () => {
    const answers = await inquirer
        .prompt([
            {
                type: 'input',
                name: 'first_name',
                message: "What is the new employees first name?"
            },
            {
                type: 'input',
                name: 'last_name',
                message: "What is the new employees last name?"
            },
            {
                type: 'input',
                name: 'roleID',
                message: "What is the employee's role ID?"
            },
            {
                type: 'input',
                name: 'managerID',
                message: "What is the manager's ID?"
            }
        ]);
    db.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)`, [answers.first_name, answers.last_name, answers.roleID, answers.managerID], (err, rows) => {
        if (err) throw err
        console.table(rows);
        promptCompany();
    });
};
// const promptCompany = () => {
//     inquirer
//         .prompt([
//             {
//                 type: "list",
//                 name: "options",
//                 message: "What would you like to do?",
//                 choices: [
//                     "View Department",
//                     "View Roles",
//                     "View Employees",
//                 ]
//             }]).then((answers) => {
//                 console.log(answers);
//                 switch (answers.options) {
//                     case 'View Department':
//                         viewDepartments();
//                         break;
//                     case 'View Roles':
//                         viewRoles();
//                         break;
//                     default:
//                         console.log("Hello");
//                 }
//             })
// };

// `SELECT employee.*, role.title
//     AS role_title
//     FROM employee
//     LEFT JOIN role
//     ON employee.role_id = role.id
//     `

// SELECT employee.*,
//     FROM employee
//     JOIN role
//     ON employee.id = role.role_id
//     JOIN department
//     ON department.id = role.department_id

//     `SELECT employee.*, role.title, role.salary
//     FROM employee
//     JOIN role
//     ON employee.role_id = role.id
//     `

