const {User} = require("../../../database/models");
const jwt = require('jsonwebtoken');
const secret = require('../../../configs/secret')
const bcrypt = require('bcrypt')

const AuthController = {

    async login(req, res) {
        
        try{
            const {email,password} = req.body
    
            const user = await User.findOne({
                where: {
                    email,
                },
            });
    
            if (!user) {
                return res.status(404).json('Email ou senha inválidas')
            }

            if(!user.status){
                return res.status(401).json('Usuário não está mais ativo')
            }
    
            if (!bcrypt.compareSync(password, user.password)) {
                return res.status(404).json('Email ou senha inválidas')
            }
    
            const token = jwt.sign({
                user_id: user.user_id,
                email: user.email,
                name_user: user.name_user,
                address: user.address,
                phone: user.phone    
            },
                secret.key
            )
    
            return res.json({ token, user: {user_id: user.user_id} })
        
        } catch (error) {
            res.status(500).json("Falha ao fazer o login do usuário");
        }

    }
}

module.exports = AuthController;