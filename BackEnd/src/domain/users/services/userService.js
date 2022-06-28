const { User } = require("../../../database/models");
const bcrypt = require ('bcrypt');
const cloudinary = require("../../../configs/cloudinary")
const fs = require('fs')


const UserService = {
    cripPassword(password){
        const newPassword = bcrypt.hashSync(password,6) 
        return newPassword
    },

    async registerImages(file){
        const uploadPath = await cloudinary.uploads(file.path,'adoptme/users')
        fs.unlinkSync(file.path);
        return uploadPath
    },

    async userExists(user_id){
        const userExists = await User.findOne({
            where: {
               user_id
            }
        });
        return userExists
    },

    async emailExists(email){
        const userExists = await User.findOne({
            where: {
               email
            }
        });
        return userExists
    },

    async userHasPermission(user_id,email){
        const userHasPermission = await User.count({
            where: {
                user_id,
                email
            }
        });

        return userHasPermission
    },
}

module.exports = UserService