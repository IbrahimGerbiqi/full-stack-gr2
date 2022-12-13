const express = require('express')
const Sequelize = require('sequelize')

const app = express()
const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql'
})

// Define a user model
const User = sequelize.define('user', {
  name: Sequelize.STRING,
  email: Sequelize.STRING,
  password: Sequelize.STRING
})

// Sync the model with the database
User.sync()

// Define the API routes
app.post('/register', (req, res) => {
  // Parse the request body
  const { name, email, password } = req.body

  // Validate the input data
  if (!name || !email || !password) {
    return res.status(400).send('Missing required fields')
  }

  // Create a new user
  User.create({ name, email, password })
    .then(user => res.json(user))
    .catch(err => res.status(500).send(err.message))
})

app.get('/users', (req, res) => {
  // Get all users
  User.findAll()
    .then(users => res.json(users))
    .catch(err => res.status(500).send(err.message))
})

app.put('/users/:id', (req, res) => {
  // Parse the request body
  const { name, email, password } = req.body

  // Validate the input data
  if (!name || !email || !password) {
    return res.status(400).send('Missing required fields')
  }

  // Update the user with the specified ID
  User.update({ name, email, password }, { where: { id: req.params.id }})
    .then(() => res.sendStatus(200))
    .catch(err => res.status(500).send(err.message))
})

app.delete('/users/:id', (req, res) => {
  // Delete the user with the specified ID
  User.destroy({ where: { id: req.params.id }})
    .then(() => res.sendStatus(200))
    .catch(err => res.status(500).send(err.message))
})

app.get('/users/:page', (req, res) => {
  // Get the specified page of users (10 users per
