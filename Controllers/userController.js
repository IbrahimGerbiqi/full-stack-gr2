const { REPL_MODE_SLOPPY } = require("repl")
//1
const createUser = (req,res) =>{
    models.User.create({...req.body})
    .then(userResponse=>{
        res.json('created')
    })
    .catch(error =>{
        res.json(error)
    })

}

//2

const findUsers =(req,res) => {
    models.User.findAll({})
    .then((userResponse) => {
        res.json(userResponse)
    })
}

//3

const updateUserById = (req,res)=>{
    const firstName = req.body.firstName
    const lastName = req.body.lastName
    models.User.update(

        {
            firstName:firstName,lastName:lastName
        },
        {
            where:{
                id:req.params.id
            }
        })
        .then(userResponse=>{
            res.json('Updated')
        })
     }
    
     //4
     const deleteUserById =(req, res)=>{
        models.User.destroy({
            where:{
                id:req.params.id
            }
        })
        .then((userResponse)=>{
            res.json(userResponse)
        })
     }