const router = require("express").Router();
const { RegisterUser, FindUsers, UpdateUsers, DeleteUser, FindUserWithPaggination, LoginJwt } = require('../controllers/UserController')

router.post('/Register', RegisterUser)
router.get('/Users', FindUsers)
router.put('/', UpdateUsers)
router.delete("/", DeleteUser)
router.get('/Page', FindUserWithPaggination)
router.get("/JWT", LoginJwt)

module.exports = router;