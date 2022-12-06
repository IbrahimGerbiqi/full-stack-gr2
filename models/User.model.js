"use strict";

exports.models = (sequelize, DataTypes) => {

    const User = sequelize.define('User', {
        // Model attributes are defined here
        id: {
            type: Number,
            allowNull: false,
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
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        createdAt: true,
    }, {
        tableName: 'users',
        timestamps: false,
        defaultScope: {
            attributes: { exclude: ['password'] }
        }
    });

    // `sequelize.define` also returns the model
    console.log(User === sequelize.models.User); // true
    return User;
}