const models = require('../models/index');

const getStudentsAndCount = (req, res) => {
    models.User.findAll({
            where: { id: req.params.id },
        })
        .then(userResponse => {
            res.json(userResponse)
        })
}

module.exports = { getStudentsAndCount }