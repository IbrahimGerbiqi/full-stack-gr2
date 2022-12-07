// const mysql = require('mysql')

// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'pw123456',
//     database: 'full-stack'
//   })

//   connection.connect((err)=>{
//     if(err) throw err
//     console.log("MySQL database is connected successfully!");
//   })

// module.exports = connection

const { Sequelize } = require('sequelize');

<<<<<<< HEAD
const sequelize = new Sequelize('school', 'root', '040285c3', {
=======
const sequelize = new Sequelize('full-stack', 'root', 'pw123456', {
>>>>>>> 9a8cc437dead66b3393c3b03c0bc2dda8e2bb7e6
  host: 'localhost',
  dialect: 'mysql'
});
 if(sequelize.authenticate()){
  console.log('Connection has been established successfully.');
} else{
  console.error('Unable to connect to the database:', error);
}
