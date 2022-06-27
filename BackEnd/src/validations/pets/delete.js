const {validate, Joi} = require("express-validation");

module.exports = validate({
    params:Joi.object({
        pet_id: Joi.number().required(),
    })
})