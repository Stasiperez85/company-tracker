const mysql = require('mysql2');

// Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // Your MySQL username,
        user: 'root',
        // Your MySQL password
        password: 'summer08',
        database: 'company'
    },
    console.log('Connected to the company database.')
);

db.connect(err => {
    if (err) throw err;
})

module.exports = db;