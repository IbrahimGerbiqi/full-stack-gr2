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

const {Sequelize} = require('sequelize');


const sequelize = new Sequelize('school', 'root', '0402853c', {
        host: 'localhost',
        dialect: 'mysql'
    });
    if(sequelize.authenticate())
{
    console.log('Connection has been established successfully.');
}
else
{
    console.error('Unable to connect to the database:', error);
}


