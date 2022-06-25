// const { User, Pet } = require("../models")
const {User} = require("../models")
const bcrypt = require ('bcrypt');
const cloudinary = require("../configs/cloudinary")
const fs = require('fs')

const UserController = {
    async create(req,res) {
        try {
        const {name_user, email, password, address, phone, comments} = req.body;

        const newPassword = bcrypt.hashSync(password,6)    
        
        const file = req.files[0]
        const uploadPath = await cloudinary.uploads(file.path,'adoptme/users')
        fs.unlinkSync(file.path);

        const newUser = await User.create({
            name_user,
            email,
            password:newPassword,
            address,
            phone,
            comments,
            image_user:uploadPath.imageUrl
        });

        res.json(newUser);

    } catch (error) {
        res.json('Não foi possível cadastrar o usuário');
            console.error(error);
    }
    },
    async listAllUsers(req, res) {
        try {
            const listUsers = await User.findAll();
            res.status(201).json(listUsers);
        } catch (error) {
            res.json('Falha ao listar usuários');
            console.error(error)
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
            res.status(404).json('Verfique os dados e tente novamente');
            console.error(error);
        };
    },

    async updateUser(req, res) {
        try {
            const {
                user_id
            } = req.params;
            const { email } = req.auth
            const {
                name_user, password, address, comments, phone
            } = req.body;

            const existId = await User.count({
                where: {
                    user_id: user_id,
                    email
                }
            });

            if (!existId) {
                return res.status(400).json('Erro ao atualizar usuário');
            }

            const updatedUser = await User.update({
                name_user, password, address, comments, phone
            }, {
                where: {
                    user_id: user_id,
                }
            });
            res.status(201).json('Dados atualizados com sucesso');
        } catch (error) {
            res.status(404).json('Verfique os dados e tente novamente');
            console.error(error);
        };
    },
    
    async deleteUser(req, res) {
        try {
            const {
                user_id
            } = req.params;
            const { email } = req.auth

            const existIdUser = await User.count({
                where: {
                    user_id:user_id,
                    email: email
                }
            });

            if (!existIdUser) {
                return res.status(400).json('Erro ao deletar usuário');
            }

            await User.destroy({
                where: {
                    user_id:user_id
                }
            });

            res.status(201).json('Usuário deletado com sucesso');
        } catch (error) {
            res.json('Falha ao deletar usuário')
            console.error(error);
        }
    },

    
}

module.exports = UserController