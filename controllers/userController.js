const models = require("../models/index")
const jwt = require('jsonwebtoken')

// #1 - Create user
const createUser = (req, res) => {
    models.User.create({...req.body})
        .then(userResponse => {
            res.json(`User successfully created!`)
        })
        .catch(error => {
            res.json(error)
        })
}

// #2 - Find all users
const findUsers = (req, res) => {
    models.User.findAll({})
        .then((userResponse) => {
            res.json(userResponse)
        })
}

// #3 - Update user by ID
const updateUserById = (req, res) => {
    const firstName = req.body.firstName
    const lastName = req.body.lastName
    models.User.update(
        {
            firstName: firstName, lastName: lastName
        },
        {
            where: {
                id: req.params.id
            }
        })
        .then(userResponse => {
            res.json(`User successfully updated!`)
        })
}

// #4 - Delete user by ID
const deleteUserById = (req, res) => {
    models.User.destroy({
        where: {
            id: req.params.id
        }
    })
        .then((userResponse) => {
            res.json(userResponse)
        })
}

// #5 - User pagination -- INCOMPLETE
const userByPage = (req, res) => {
    models.User.findAll({
        where: {
            id: req.params.id
        },
        limit: 10
    })
        .then(userResponse => {
            res.json(userResponse)
        })
}

// #6 - User login
const userLogin = (req, res) => {
    models.User.findOne({
        where: {
            email: req.body.email
        }
    })
        .then(result => {
            if (result === null) {
                res.json({
                    message: `No user with that email has been registered.`
                }, 404)
                const token = jwt.sign({result},'a31415e9265',{expiresIn:'120s'})
                res.json(token)
            }
        })
        .catch(error => {
            res.json(error, 501)
        })
}

module.exports = {findUsers, deleteUserById, updateUserById, createUser, userByPage, userLogin}