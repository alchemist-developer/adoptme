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

            if(isEmpty(file)){

                return res.status(400).json("É necessário enviar uma imagem do usuário")
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
            console.log(error)
            return res.status(500).json('Erro ao listar usuários');
        }
    },

    async listPetsByUser(req, res) {
        try {
            const {user_id} = req.params;
            const userTokenId = req.auth.user_id
            const userExists = await UserService.userExists(user_id)

            if (!userExists) {
                return res.status(404).json('Usuário não encontrado');
            } 

            if(user_id != userTokenId){
                return res.status(401).json('Usuário informado não coincide com o usuário logado')
            }

            var petsByUser = await PetService.findPetsByUser(user_id)
            if(isEmpty(petsByUser)){
                return res.status(404).json('Usuário não possui pets cadastrados atualmente')
            }

            return res.status(200).json(petsByUser);
        } catch (error) {
            return res.status(500).json('Erro ao listar os pets deste usuário');
            
        };
    },

    async updateUser(req, res) {
        try {
            const {user_id} = req.params
            const userTokenId = req.auth.user_id
            const file = req.files[0]  

            const {password} = req.body
<<<<<<< HEAD
            const newPassword = UserService.cripPassword(password)
=======

            const findUser = await UserService.userExists(user_id)

            if(password){
                var newPassword = UserService.cripPassword(password)
            }
            else{
                var newPassword = findUser.password
            }
>>>>>>> b2ed72e37c0d3e6650b2831fb8eb8461d7c6daf8

            const userHasPermission = await UserService.userHasPermission(user_id,userTokenId)

            if (!userHasPermission) {
                return res.status(404).json('Usuário não encontrado ou não possui permissão');
            }
            
            var image_user

<<<<<<< HEAD
            const findUser = await UserService.getUserByID(user_id)
            
            var image_user;
            
            if(`${file}` === 'undefined'){
                image_user = await findUser.dataValues.image_user
                
            }
            else{
                const uploadPath = await UserService.registerImages(file)
                image_user = uploadPath.imageUrl.substr(52,50)
=======
            if(`${file}` === 'undefined'){
                image_user = findUser.dataValues.image_user
            }
            else{
                const uploadPath = await UserService.registerImages(file)
                var image_user=uploadPath.imageUrl.substr(52,50)
>>>>>>> b2ed72e37c0d3e6650b2831fb8eb8461d7c6daf8
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
            return res.status(500).json('Erro ao atualizar o usuário' +error);
        };
    },
    
    async deleteUser(req, res) {
        try {
            const { user_id } = req.params;
            const tokenid = req.auth.user_id;
            
            const userHasPermission = await UserService.userHasPermission(user_id,tokenid)
            console.log(userHasPermission)

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

function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}

module.exports = UserController