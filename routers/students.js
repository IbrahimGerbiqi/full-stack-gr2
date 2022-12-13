const router = require("express").Router();
const {getStudentsAndCount} = require('../controllers/StudentController');

router.get('/', getStudentsAndCount)


module.exports = router;