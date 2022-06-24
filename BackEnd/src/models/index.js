const User = require ('../models/User')
const Pet = require ('../models/Pet')

User.hasMany(
    Pet, {
        foreignKey: 'user_id'
    }
)

Pet.belongsTo (
    User, {
        foreignKey: 'user_id'
    }
)


module.exports = {
    User,
    Pet
}