const Joi = require('joi');

module.exports = {
    register (req, res, next) {
        const schema = {
            email: Joi.string().email(),
            password: Joi.string().regex(
                new RegExp('^[a-zA-Z0-9]{8,32}$')
            )
        };

        const {error} = Joi.validate(req.body, schema);
        if (error) {
            switch (error.details[0].context.key) {
                case 'email':
                    res.status(400).send({
                        error: `You must provide a valid email address`
                    });
                    break;
                case 'password':
                    res.status(400).send({
                        error: `The password failed to match the following rules 
                            <br>
                            1. must lower case or upper case or number
                            <br>
                            2. The minimum password is 8 character and max is 32 character
                        `
                    });
                    break;
                default:
                    res.status(400).send({
                        error: `Invalid registration information`
                    });
            };
        } else {
            next();
        }
    }
};
