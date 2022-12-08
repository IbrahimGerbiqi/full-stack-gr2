"use strict";

module.exports = (sequelize, DataTypes) => {

const Role = sequelize.define('Role', {
  // Model attributes are defined here

    id:{
      type: DataTypes.INTEGER,
      allowNull:false,
      primaryKey:true,
      autoIncrement:true
    },
    name:{
      type:DataTypes.STRING,
      allowNull:false
    },
    description2:{
      type:DataTypes.STRING,
      allowNull:false
    }
 
}, {
    tableName: 'roles',
    timestamps:true,
});

sequelize.sync({ alter: true })  

// `sequelize.define` also returns the model
 console.log(Role === sequelize.models.Role); // true
 return Role;
}