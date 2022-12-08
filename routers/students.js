const router = require("express").Router();
const {getStudentsAndCount, deleteStudent} = require('../controllers/studentController')


router.get('/', getStudentsAndCount)

router.delete('/:id',deleteStudent)


module.exports = router;