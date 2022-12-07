const models = require('../models/index');

const getStudents = (req, res) => {
    models.User.findOne({
            where: { id: req.params.id },
        })
        .then(userResponse => {
            res.json(userResponse)
        })
}

module.exports = { getStudents }