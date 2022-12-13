const { findUsers, deleteUserById, updateUserById, createUser, userByPage } = require("../controllers/userController");
const router = require("express").Router()

router.get('2', findUsers)

router.delete('/:id', deleteUserById)

router.put('/:id', updateUserById)

router.post('2', createUser)

router.get('/page/:page', userByPage)

module.exports - router