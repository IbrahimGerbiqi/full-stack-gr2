
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('full-stack', 'root', 'password', {
    host: 'localhost',
    dialect: 'mysql'
});
if (sequelize.authenticate()) {
    console.log('Connection has been established successfully.');
} else {
    console.error('Unable to connect to the database:', error);
}