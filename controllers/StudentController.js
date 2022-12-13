const models = require('../models/index');

//detyra ne klase
const getStudentsAndCount = (req,res)=>{
    models.User.findAndCountAll({})
    .then( studentsResponse => {
      res.json( studentsResponse )
    })
}

module.exports = {getStudentsAndCount}
