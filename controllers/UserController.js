const models = require('../models/index');
const jwt = require('jsonwebtoken')
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

    if(userFromToken.email !== 'ibrahim@gmail.com') res.json({message:"You are not authorized to take this action"}, 401)

    models.User.destroy({
        where: {id: req.params.id},
    })
        .then( userResponse => {
            res.json( userResponse )
        })
}



const loginUser = (req,res)=>{
    models.User.findOne({ where: { email: req.body.email } }).then(result=>{
        if(result === null) res.json({message:"There is not user with that email!"},404)
        const token =  jwt.sign({result}, 'superSecret1!@',{expiresIn:'30s'})
        res.json(token)
    }).catch(err=>{
        console.log(err)
        res.json(err,501)
    })
}

module.exports = {getUsersAndCount, deleteUser, loginUser}
