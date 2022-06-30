const {validate, Joi} = require("express-validation");

module.exports = validate({
    body: Joi.object({
        name_pet: Joi.string(),
        type: Joi.string(),
        size: Joi.string(),
        gender: Joi.string(),
        city: Joi.string(),
        state: Joi.string(),
        comments: Joi.string(),
        age: Joi.string(),
        phone: Joi.string(),
        mobile: Joi.string(),
    })
})