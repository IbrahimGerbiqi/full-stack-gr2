"use strict";

module.exports = (sequelize, DataTypes) => {

const User = sequelize.define('User', {
  // Model attributes are defined here
  id:{
    type: DataTypes.INTEGER,
    allowNull:false,
    autoIncrement:true,
    primaryKey: true
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  // password: {
  //   type: DataTypes.STRING,
  //   allowNull: false
  // },
}, {
    tableName: 'users',
    timestamps:true,
    defaultScope:
     {attributes: { exclude: ['password'] }
}
});

sequelize.sync()

// `sequelize.define` also returns the model
 console.log(User === sequelize.models.User); // true
 return User;
}