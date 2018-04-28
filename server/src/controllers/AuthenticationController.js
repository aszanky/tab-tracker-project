const { User } = require('../models');

module.exports = {
    async register (req, res) {
        try {
           const user = await User.create(req.body);
           const userJson = user.toJSON();
           res.send(userJson);
           console.log(userJson);
        } catch (error) {
            res.status(400).send({
                error: 'The User has already created'
            });
        }
    }
};
