const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Fidan123:',
    database: 'school'
  })

  connection.connect((err)=>{
    if(err) throw err
    console.log("MySQL database is connected successfully!");
  })

module.exports = connection

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('school', 'root', 'Root', {
    host: 'localhost',
    dialect: 'mysql'
});
if (sequelize.authenticate()) {
    console.log('Connection has been established successfully.');
} else {
    console.error('Unable to connect to the database:', error);
}