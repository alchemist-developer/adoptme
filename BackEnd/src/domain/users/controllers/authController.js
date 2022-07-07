const {User} = require("../../../database/models");
const jwt = require('jsonwebtoken');
const secret = require('../../../configs/secret')
const AuthService = require('../services/authService');
const UserService = require("../services/userService");

const AuthController = {

    async login(req, res) {
        
        try{
            const {email,password} = req.body
    
            const findUser = await UserService.emailExists(email)

            if (!findUser) {
                return res.status(404).json('Email ou senha inválidas')
            }

            if(!findUser.status){
                return res.status(401).json('Usuário não está mais ativo')
            }
            const comparePasswords = AuthService.compareCripPass(password,findUser)

            if (!comparePasswords) {
                return res.status(404).json('Email ou senha inválidas')
            }
    
            const token = jwt.sign({
                user_id: findUser.user_id,
                email: findUser.email,
                name_user: findUser.name_user,
                address: findUser.address,
                phone: findUser.phone    
            },
                secret.key
            )
    
            return res.json({ token, user: findUser })
        
        } catch (error) {
            console.log(error)
            res.status(500).json("Falha ao fazer o login do usuário");
        }

    }
}

module.exports = AuthController;