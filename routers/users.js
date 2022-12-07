const router = require("express").Router();
const {getUsersAndCount,deleteUser} = require('../controllers/UserController')


router.get('/', getUsersAndCount)

router.delete('/:id',deleteUser)


module.exports = router;