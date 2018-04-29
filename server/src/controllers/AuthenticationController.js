const { User } = require('../models');
const jwt = require('jsonwebtoken');
const config = require('../config/config');

// function which is going to sign a user object using JWT
// to give us back a JWT Token
// jwtSecret is a secret is only known by Server, your Token is valid or not
function jwtSignUser (user) {
    const ONE_WEEK = 60 * 60 * 24 * 7;
    return jwt.sign(user, config.authentication.jwtSecret, {
        expiresIn: ONE_WEEK
    });
};

module.exports = {
    async register (req, res) {
        try {
           const user = await User.create(req.body);
           const userJson = user.toJSON();
           res.send({
               user: userJson,
               token: jwtSignUser(userJson)
            });
        } catch (error) {
            res.status(400).send({
                error: 'The User has already created'
            });
        }
    },
    async login (req, res) {
        try {
           const {email, password} = req.body;
           const user = await User.findOne({
               where: {
                   email: email
               }
           });
           if (!user) {
               return res.status(403).send({
                   error: 'The login information was incorrect'
               });
           };
           const isPasswordValid = user.comparePassword(password);
           if (!isPasswordValid) {
                return res.status(403).send({
                    error: 'The login information was incorrect'
                });
           };
           const userJson = user.toJSON();
           res.send({
               user: userJson,
               token: jwtSignUser(userJson)
           });
        } catch (error) {
            res.status(500).send({
                error: 'Invalid login information'
            });
        }
    }
};
