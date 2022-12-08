const router = require("express").Router();
const {getStudents} = require('../controllers/studentControllers')

router.get('/',getStudents)

module.exports=router;