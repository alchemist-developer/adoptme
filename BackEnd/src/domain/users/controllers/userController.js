// const { User, Pet } = require("../models")
const {User} = require("../../../database/models");
const UserService = require("../services/userService")
const PetService = require("../../pets/services/petService");

const UserController = {
    async create(req,res) {
        try {
            const {password, email} = req.body;
            const newPassword = UserService.cripPassword(password)
            const file = req.files[0]

            if(file==[]){
                return res.status(400).json("É necessário enviar uma imagem do usuárip")
              }
            
            if(await UserService.emailExists(email)){
                return res.status(404).json("E-mail já cadastrado")
            }
            const uploadPath = await UserService.registerImages(file)

            const newUser = await User.create({
                ...req.body,
                status:true,
                password:newPassword,
                image_user:uploadPath.imageUrl.substr(52,50)
            });

            return res.status(201).json(newUser);

        } catch (error) {
            return res.status(500).json('Erro ao cadastrar o usuário')
        }
    },

    async listAllUsers(req, res) {
        try {
            const listUsers = await User.findAll({where:{status:true}});
            return res.status(200).json(listUsers);
        } catch (error) {
            return res.status(500).json('Erro ao listar usuários');
        }
    },

    async listPetsByUser(req, res) {
        try {
            const {user_id} = req.params;
            const userTokenId = req.auth.user_id
            const userExists = await UserService.userExists(user_id)

            if(user_id != userTokenId){
                return res.status(401).json('Usuário informado não coincide com o usuário logado')
            }

            if (!userExists) {
                return res.status(400).json('Usuário não encontrado');
            }

            const petsByUser = await PetService.findPetsByUser(user_id)
            if(petsByUser=[]){
                return res.status(404).json('Usuário não possui pets cadastrados atualmente')
            }

            return res.status(200).json(petsByUser);
        } catch (error) {
            console.log(error)
            return res.status(500).json('Erro ao listar os pets deste usuário');
            
        };
    },

    async updateUser(req, res) {
        try {
            const {user_id} = req.params
            const { email } = req.auth
            const file = req.files[0]   

            const {password} = req.body
            const newPassword = UserService.cripPassword(password)

            const userHasPermission = await UserService.userHasPermission(user_id,email)

            if (!userHasPermission) {
                return res.status(404).json('Usuário não encontrado ou não possui permissão');
            }

            const findUser = await UserService.userExists(user_id)

            if(file == undefined){
                image_user = findUser.image_user
            }
            else{
                const uploadPath = await UserService.registerImages(file)
                image_user=uploadPath.imageUrl.substr(52,50)
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

            const updatedPets = await PetService.updatePetPhone(user_id)

            const updatedUser = await UserService.userExists(user_id)           
            return res.status(201).json(updatedUser);
        } catch (error) {
            console.log(error)
            return res.status(500).json('Erro ao atualizar o usuário');
        };
    },
    
    async deleteUser(req, res) {
        try {
            const {user_id} = req.params;
            const { email } = req.auth

            const userHasPermission = await UserService.userHasPermission(user_id,email)

            if (!userHasPermission) {
                return res.status(404).json('Usuário não encontrado ou não possui permissão');
            }
            
            const findUser = await UserService.userExists(user_id)
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

            const updatedUser = await UserService.userExists(user_id)
            return res.status(200).json(updatedUser);
        } catch (error) {
            return res.status(500).res.json('Erro ao deletar usuário')
            
        }
    },

    
}

module.exports = UserController