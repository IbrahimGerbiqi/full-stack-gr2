"use strict";

module.exports = (sequelize, DataTypes) => {

const User = sequelize.define('User', {

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

}, {
    tableName: 'users',
    timestamps:false,
    defaultScope:
     {attributes: { exclude: ['password'] }
}
});

sequelize.sync()


 console.log(User === sequelize.models.User);
 return User;
}