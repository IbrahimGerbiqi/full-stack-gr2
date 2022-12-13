const {findUsers, deleteUserById, updateUserById, createUser, userByPage, userLogin} = require("../controllers/userController");

const router = require("express").Router()

router.get('/', findUsers)

router.delete('/:id', deleteUserById)

router.put('/:id', updateUserById)

router.post('/', createUser)

router.get('/page/:page', userByPage)

router.post('/login', userLogin)

module.exports = router
