const router = require("express").Router();
const {getUsersAndCount, deleteUser, loginUser} = require('../controllers/UserController')


router.get('/', getUsersAndCount)

router.delete('/:id', deleteUser)

router.post('/', loginUser);


module.exports = router;