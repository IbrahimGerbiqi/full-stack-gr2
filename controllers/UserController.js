const models = require('../models/index');

const getUsersAndCount = (req,res)=>{
    models.User.findAndCountAll({})
    .then( userResponse => {
      res.json( userResponse )
    })
}

const deleteUser = (req,res)=>{
    models.User.destroy({
        where: {id: req.params.id},
    })
    .then( userResponse => {
        res.json( userResponse )
    })
}
const loginUser = (req,res) =>{
    models.User.findOne({
        where:{email: req.body.email}
    }).then(result =>{
        
    })
}


module.exports = {getUsersAndCount, deleteUser}
