const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'school'
  })

  connection.connect((err)=>{
    if(err) throw err
    console.log("MySQL database is connected successfully!");
  })

module.exports = connection