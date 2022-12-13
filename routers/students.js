const router = require("express").Router();
const {getStudensAndCount,deleteStudent} = require('../controllers/StudentsControllers')


router.get('/', getStudentsAndCount)

router.delete('/:id',deleteStudent)


module.exports = router;

