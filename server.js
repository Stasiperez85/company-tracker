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
                ]
            }])


    switch (answers.options) {
        case 'View Department':
            viewDepartments();
            break;
        case 'View Roles':
            viewRoles();
            break;
        default:
            console.log("Hello");
    }

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

// const viewDepartments = () => {
//     db.query(`SELECT * FROM department`, (err, rows) => {
//         if (err) throw err
//         console.table(rows);
//     });
// }
