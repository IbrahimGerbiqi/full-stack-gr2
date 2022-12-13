const router = require("express").Router();
const {getStudents} = require('../controllers/StudentController')


router.get('/', getStudents)

router.get('/:id',getStudents)


module.exports = router;