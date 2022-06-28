const { User } = require("../../../database/models");
const bcrypt = require ('bcrypt');


const AuthService = {

    compareCripPass(password,user){
        const comparison = bcrypt.compareSync(password, user.password)
        return comparison
    }

}

module.exports = AuthService