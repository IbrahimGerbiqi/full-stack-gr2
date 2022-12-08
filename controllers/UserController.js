const models = require('../models/index');
const jwt = require('jsonwebtoken')

const getUsersAndCount = (req, res) => {
    models.User.findAndCountAll({})
        .then(userResponse => {
            res.json(userResponse)
        })
}

const deleteUser = (req, res) => {

    console.log(req.headers.authorization)

    const token = req.headers.authorization

    if (!token) res.json({message: 'You are not authorized!'}, 403)

    const decoded = jwt.verify(token.split(' ')[1], 'a31415e9265')

    if (!decoded) res.json({message: 'Token is invalid!'}, 401)

    const userFromToken = decoded.result

    if (userFromToken !== 'butrint.sph@gmail.com') res.json({message: 'You are not authorized to take this action!'}, 401)

    models.User.destroy({
        where: {id: req.params.id},
    })
        .then(userResponse => {
            res.json(userResponse)
        })
}

const loginUser = (req, res) => {
    models.User.findOne({
        where: {
            email: req.body.email
        }
    })
        .then(result => {
            if (result === null) res.json({message: "User with that email doesn't exist"}, 404)
            const token = jwt.sign({result}, 'a31415e9265',{expiresIn:'60s'})
            res.json(token)
        })
        .catch(err => {
            console.log(err)
            res.json(err,501)
        })
}

module.exports = {getUsersAndCount, deleteUser, loginUser}
