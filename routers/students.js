const router = require("express").Router();
const { getStudents } = require("../controllers/StudentController");


router.get('/:id', getStudents)


module.exports = router;