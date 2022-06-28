const {validate, Joi} = require("express-validation");

module.exports = validate({
    body: Joi.object({
        name_pet: Joi.string().required(),
        type: Joi.string().required(),
        size: Joi.string().required(),
        gender: Joi.string().required(),
        address: Joi.string().required(),
        state: Joi.string().required(),
        comments: Joi.string().required(),
        age: Joi.string().required(),
        phone: Joi.string().required(),
    })
})