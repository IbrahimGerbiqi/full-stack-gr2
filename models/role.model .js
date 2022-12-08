"use strict";

module.exports = (sequelize, DataTypes) => {

  const User = sequelize.define('User', {

  }, {
    tableName: 'users',
    timestamps: false,
    defaultScope:
    {
      attributes: { exclude: ['password'] }
    }
  });

  // `sequelize.define` also returns the model
  console.log(User === sequelize.models.User); // true
  return User;
}