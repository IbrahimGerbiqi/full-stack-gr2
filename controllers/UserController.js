const models = require('../models/index');

const getUsersAndCount = (req,res)=>{
    models.User.findAndCountAll({})
    .then( userResponse => {
      res.json( userResponse )
    })
}


    const deleteUser = (req,res)=>{

        console.log(req.headers.authorization)
    
        const token = req.headers.authorization
    
        if(!token) res.json({message:"You are not authorized!"}, 403)
    
        const decoded = jwt.verify(token.split(' ')[1], 'superSecret1!@');
    
        if(!decoded) res.json({message:"Token is not valid"}, 401)
    
        const userFromToken = decoded.result
    
        if(userFromToken.email !== 'erdetshehu@gmail.com') res.json({message:"You are not authorized to take this action"}, 401)
    models.User.destroy({
        where: {id: req.params.id},
    })
    .then( userResponse => {
        res.json( userResponse )
    })
}


module.exports = {getUsersAndCount, deleteUser}