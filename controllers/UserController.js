const models = require('../models/index');
const jwt = require('jsonwebtoken')

const RegisterUser = (req, res) => {
    let firstName = req.body.firstName
    let lastName = req.body.lastName
    let email = req.body.email
    let password = req.body.password

    let error1 = []

    if (!firstName || firstName == " ") {
        error1.push("First name is required")
    }
    if (!lastName || lastName == " ") {
        error1.push("Last name is required")
    }
    if (!email || email == " ") {
        error1.push("Email is required")
    }
    if (!password || password == " ") {
        error1.push("Password is required")
    }

    if (password.length < 8) {
        error1.push("Password must be at least 8 characters long")
    }

    if (error1.length >= 1) {
        res.json(error1, 400)
        return
    }

    models.User.create({...req.body })
        .then(() => {
            res.json("You are registered succesfully")
        }).catch((error) => {
            res.json(error)
        })
}

const FindUsers = (req, res) => {
    models.User.findAll({})
        .then((users) => {
            res.json(users)
        })
}

const UpdateUsers = (req, res) => {
    let firstName = req.body.firstName
    let lastName = req.body.lastName
    let email = req.body.email
    let id = req.body.id

    let error2 = []

    if (!firstName || firstName == " ") {
        error2.push("First name is required")
    }
    if (!lastName || lastName == " ") {
        error2.push("Last name is required")
    }
    if (!email || email == " ") {
        error2.push("Email is required")
    }
    if (!id || id == " ") {
        error2.push("Id is required")
    }

    if (error2.length >= 1) {
        res.json(error1, 400)
        return
    }

    models.User.update({ firstName: req.body.firstName, lastName: req.body.lastName, email: req.body.email }, {
        where: { id: req.body.id }
    }).then(() => {
        res.json("User was updated with succes")
    })
}

const DeleteUser = (req, res) => {
    let id = req.body.id

    let error2 = []

    if (!id || id == " ") {
        error2.push("Id is required")
    }

    if (error2.length >= 1) {
        res.json(error1, 400)
        return
    }

    models.User.destroy({
        where: { id: req.body.id },
    }).then(() => {
        res.json("User was deleted with succes")
    }).catch(() => {
        res.json("Invalid user id")
    })
}

const FindUserWithPaggination = (req, res) => {
    let limit = req.body.limit * 5

    models.User.findAll({
        limit: 5,
        offset: limit
    }).then((users) => {
        res.json(users)
    })
}

const LoginJwt = (req, res) => {
    models.User.findOne({ where: { email: req.body.email } }).then(result => {
        if (result === null) res.json({ message: "There is not user with that email!" }, 404)
        const token = jwt.sign({ result }, 'SecretPass')
        res.json(token)
    })
}
module.exports = { RegisterUser, FindUsers, UpdateUsers, DeleteUser, FindUserWithPaggination, LoginJwt }