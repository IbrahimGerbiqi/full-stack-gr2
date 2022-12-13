const models = require('../models/index');

const getStudentsAndCount = (req,res)=>{
    models.student.findAndCountAll({})
    .then( studentResponse => {
      res.json( studentResponse )
    })
}

const deleteStudent = (req,res)=>{
    models.student.destroy({
        where: {id: req.params.id},
    })
    .then( studentResponse => {
        res.json( studentResponse )
    })
}
