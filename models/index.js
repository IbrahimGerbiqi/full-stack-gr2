// const fs        = require( 'fs' )
// const path      = require( 'path' )
// const Sequelize = require( 'sequelize' )
// const basename  = path.basename( module.filename )
// const env       = process.env.NODE_ENV || 'development'
// const db        = {}

// let sequelize = new Sequelize( 'full-stack', 'root', 'pw123456', {
//     host: 'localhost',
//     dialect: 'mysql'
//   } )

// fs
//   .readdirSync( __dirname )
//   .filter( function( file ) {
//     return ( file.indexOf( '.' ) !== 0 ) && ( file !== basename ) && ( file.slice( -3 ) === '.js' )
//   } )
//   .forEach( function( file ) {
//     var model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes)
//     db[ model.name ] = model
//   });

// Object.keys( db ).forEach( function( modelName ) {
//   if ( db[ modelName ].associate ) {
//     db[ modelName ].associate( db )
//   }
// });

// db.sequelize = sequelize
// db.Sequelize = Sequelize

// module.exports = db

//1
const express = require('express')
const app = express()


function registerUser(username, password, email) {

  if (!username || typeof username !== "string") {
    throw new Error("Please provide a valid username");
  }
  
  if (!password || typeof password !== "string") {
    throw new Error("Please provide a valid password");
  }
  if (!email || typeof email !== "string" || !email.includes("@")) {
    throw new Error("Please provide a valid email address");
  }
  const user = {
    username: username,
    password: password,
    email: email,
  };
  users.push(user);
  return user;
}
//2

function getAllUsers() {
      return users;
}
//3

app.put('/users/:id', (req, res) => {
  const id = req.params.id;
  const updatedUser = req.body;
  User.findByIdAndUpdate(id, updatedUser, (err, user) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    return res.json(user);
  });
});

