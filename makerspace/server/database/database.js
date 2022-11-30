const mysql = require('mysql')
const connection = mysql.createConnection({
    host:'localhost',
    user: 'root',
    database: 'school',
    password: 'password'
});

connection.connect((err)=>{
    if(err) throw err
    console.log("MySQL database is connected succesfully ");
})

module.exports = connection 