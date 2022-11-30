const mysql = require('mysql')

const connections = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Root',
    database: 'school'
})

connections.connect((err) => {
    if (err) throw err
    console.log("MySQL database is connected successfully!");
})

module.exports = connections