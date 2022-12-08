const router = require("express").Router();
const {getStudentsAndCount, deleteStudent} = require('../controllers/StudentController')


router.get('/', getStudentsAndCount)

router.delete('/:id',deleteStudent)


module.exports = router;