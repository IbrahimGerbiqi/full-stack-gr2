const models = require('../models/index');

const getStudentsAndCount = (req,res)=>{
    models.User.findAndCountAll({})
        .then( userResponse => {
            res.json( userResponse )
        })
}

const deleteStudent = (req,res)=>{
    models.User.destroy({
        where: {id: req.params.id},
    })
        .then( userResponse => {
            res.json( userResponse )
        })
}


module.exports = {getStudentsAndCount, deleteStudent}
