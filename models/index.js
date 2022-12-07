const fs        = require( 'fs' )
const path      = require( 'path' )
const Sequelize = require( 'sequelize' )
const basename  = path.basename( module.filename )
const env       = process.env.NODE_ENV || 'development'
const db        = {}

<<<<<<< HEAD
let sequelize
sequelize = new Sequelize( 'school', 'root', '040285c3', {
=======
let sequelize = new Sequelize( 'full-stack', 'root', 'pw123456', {
>>>>>>> 9a8cc437dead66b3393c3b03c0bc2dda8e2bb7e6
    host: 'localhost',
    dialect: 'mysql'
  } )

fs
  .readdirSync( __dirname )
  .filter( function( file ) {
    return ( file.indexOf( '.' ) !== 0 ) && ( file !== basename ) && ( file.slice( -3 ) === '.js' )
  } )
  .forEach( function( file ) {
    var model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes)
    db[ model.name ] = model
  });

Object.keys( db ).forEach( function( modelName ) {
  if ( db[ modelName ].associate ) {
    db[ modelName ].associate( db )
  }
});

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
