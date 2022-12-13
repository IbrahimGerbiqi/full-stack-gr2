const loginUser = (req,res)=>{
    models.User.findOne({ where: { email: req.body.email } }).then(result=>{
        if(result === null) res.json({message:"There is not user with that email!"},404)
       const token =  jwt.sign({result}, 'superSecret1!@',{expiresIn:'10s'})
       res.json(token)
    }).catch(err=>{
        console.log(err)
        res.json(err,501)
    })
}