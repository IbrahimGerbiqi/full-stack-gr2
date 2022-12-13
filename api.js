const express = require('express');
const Sequelize = require('sequelize');
const app = express();

// create connection to MySQL database
const sequelize = new Sequelize('school', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql'
});

// create user model
const User = sequelize.define('user', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

// create JWT token secret
const jwtSecret = 'YOUR_SECRET_HERE';

// create route to register user
app.post('/register', async (req, res) => {
  try {
    // get user data from request body
    const { name, email, password } = req.body;

    // validate user data
    if (!name || !email || !password) {
      return res.status(400).json({
        error: 'All fields are required'
      });
    }

    // create new user
    const user = await User.create({
      name,
      email,
      password
    });

    // return success message
    res.json({
      message: 'User registered successfully'
    });
  } catch (error) {
    // return error message
    res.status(500).json({
      error: 'Error registering user'
    });
  }
});

// create route to get all users
app.get('/users', async (req, res) => {
  try {
    // get all users from database
    const users = await User.findAll();

    // return array of users
    res.json(users);
  } catch (error) {
    // return error message
    res.status(500).json({
      error: 'Error getting users'
    });
  }
});

// create route to update user by id
app.put('/users/:id', async (req, res) => {
  try {
    // get user id from request parameters
  }})