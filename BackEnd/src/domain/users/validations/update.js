const {validate, Joi} = require("express-validation");

module.exports = validate({
    body: Joi.object({
        name_user: Joi.string(),
        password: Joi.string().min(6),
        address: Joi.string(),
        phone: Joi.string(),
        comments: Joi.string(),
        mobile: Joi.string(),
        whats: Joi.boolean()
    })
})