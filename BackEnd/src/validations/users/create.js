const {validate, Joi} = require("express-validation");

module.exports = validate({
    body: Joi.object({
        name: Joi.string().required(),
        username: Joi.string().required(),
        avatar: Joi.string().required(),
        email:  Joi.string().email().required(),
        password: Joi.string().min(6).required(),
        apartment: Joi.number().required(),
         admin: Joi.boolean().required()
    })
})