// const { User, Pet } = require("../models")
const {User} = require("../../../database/models");
const { Pet } = require("../../../database/models");
const bcrypt = require ('bcrypt');
const cloudinary = require("../../../configs/cloudinary")
const fs = require('fs')

const UserController = {
    async create(req,res) {
        try {
            const {password} = req.body;
            const newPassword = bcrypt.hashSync(password,6)    
            
            const file = req.files[0]
            const uploadPath = await cloudinary.uploads(file.path,'adoptme/users')
            fs.unlinkSync(file.path);

            const newUser = await User.create({
                ...req.body,
                status:true,
                password:newPassword,
                image_user:uploadPath.imageUrl.substr(52,50)
            });

            res.json(newUser);

        } catch (error) {
            res.json('Erro ao cadastrar o usuário')
        }
    },

    async listAllUsers(req, res) {
        try {
            const listUsers = await User.findAll();
            res.status(201).json(listUsers);
        } catch (error) {
            res.json('Erro ao listar usuários');
        }
    },

    async listPetsByUser(req, res) {
        try {
            const {
                user_id
            } = req.params;
           
            const existUser = await User.findOne({
                where: {
                   user_id
                }
            });

            if (!existUser) {
                return res.status(400).json('Usuário não encontrado');
            }

            const petsByUser = await Pet.findAll(
             {
                where: {
                    user_id: existUser.user_id
                }
            });
            res.status(201).json(petsByUser);
        } catch (error) {
            res.status(500).json('Erro ao listar os pets deste usuário');
        };
    },

    async updateUser(req, res) {
        try {
            const {user_id} = req.params
            const { email } = req.auth
            const file = req.files[0]     
            const {password} = req.body
            const newPassword = bcrypt.hashSync(password,6)

            const existId = await User.count({
                where: {
                    user_id,
                    email
                }
            });

            if (!existId) {
                return res.status(404).json('Usuário não encontrado ou não possui permissão');
            }

            const findUser = await User.findByPk(user_id)

            if(file == undefined){
                image_user = findUser.image_user
            }
            else{
                const uploadPath = await cloudinary.uploads(file.path,'adoptme/users')
                image_user=uploadPath.imageUrl.substr(52,50)
                fs.unlinkSync(file.path);
            }

            await User.update({
                ...req.body,
                image_user,
                password:newPassword
            }, {
                where: {
                    user_id,
                }
            });

            const updatedUser = await User.findByPk(user_id)

            

            res.status(201).json(updatedUser);
        } catch (error) {
            res.status(500).json('Erro ao atualizar o usuário');
        };
    },
    
    async deleteUser(req, res) {
        try {
            const {user_id} = req.params;
            const { email } = req.auth

            const existIdUser = await User.count({
                where: {
                    user_id,
                    email
                }
            });

            if (!existIdUser) {
                return res.status(404).json('Usuário não encontrado ou não possui permissão');
            }
            
            const findUser = await User.findByPk(user_id)
            if(!findUser.status){
                return res.status(401).json('Usuário já desativado')
            }

            await User.update({
                status:false
            }, {
                where: {
                    user_id,
                }
            });

            const updatedUser = await User.findByPk(user_id)

            return res.status(200).json(updatedUser);
        } catch (error) {
            return res.status(500).res.json('Erro ao deletar usuário')
            
        }
    },

    
}

module.exports = UserController