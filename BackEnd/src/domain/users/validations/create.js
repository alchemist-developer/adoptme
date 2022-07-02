const {validate, Joi} = require("express-validation");

module.exports = validate({
    body: Joi.object({
        name_user: Joi.string().required(),
        email:  Joi.string().email().required(),
        password: Joi.string().min(6).required(),
        address: Joi.string().required(),
        phone: Joi.string(),
        comments: Joi.string(),
        mobile: Joi.string().required(),
        whats: Joi.boolean().required()
    })
})