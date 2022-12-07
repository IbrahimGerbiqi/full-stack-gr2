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


module.exports = {getUsersAndCount, deleteUser}
