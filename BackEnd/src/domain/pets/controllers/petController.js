const { Pet, User } = require("../../../database/models");
const UserService = require("../../users/services/userService")
const PetService = require('../services/petService')

const PetController = {
  async create(req, res) {
    try {
      
      const {user_id} = req.auth;
      const file = req.files

      if(file==[]){
        return res.status(400).json("É necessário enviar ao menos uma imagem do pet")
      }
      
      const {image_pet01, image_pet02, image_pet03} = await PetService.registerImages(file)
      
      const petOwner = await UserService.userExists(user_id)

      const newPet = await Pet.create({
        ...req.body,
        user_id,
        status:true,
        mobile: petOwner.mobile,
        phone: petOwner.phone,
        image_pet01,
        image_pet02,
        image_pet03
      });

      return res.status(201).json(newPet);
    } catch (error) {
      return res.status(500).json('Não foi possível publicar o Pet' + error);
    }
  },

  async listAllPets(req, res) {
    try {
      const listPets = await PetService.findAllPets()
      return res.status(200).json(listPets);
    } catch (error) {
      return res.status(500).json("Falha ao listar os pets");
    }
  },

  async updatePet(req, res) {
    try {
      const { pet_id } = req.params;
      const { user_id } = req.auth;
      const file = req.files
    
      const petByUser = await PetService.UserHasPet(user_id,pet_id)
      
      if (!petByUser) {
        return res.status(404).json("Pet não existe ou não pertence a este usuário");
      }

      const {image_pet01, image_pet02, image_pet03} = await PetService.updateImages(file, pet_id)

      await Pet.update(
        { ...req.body,
          image_pet01,
          image_pet02,
          image_pet03},
        { where: {pet_id,},}
      );
      
      const updatedPet = await PetService.findPet(pet_id)
      return res.status(200).json(updatedPet);

    } catch (error) {
      return res.status(500).json("Erro ao atualizar o pet");
    }
  },

  async deletePet(req, res) {
    try {
      const { pet_id } = req.params;
      const { user_id } = req.auth;

      const petByUser = await PetService.UserHasPet(user_id,pet_id)

      if (!petByUser) {
        return res.status(404).json("Erro ao selecionar o Pet. É possível que ele não pertença ao usuário logado");
      }

      const findPet = await PetService.findPet(pet_id)
      if(!findPet.status){
          return res.status(401).json('Pet já desativado')
      }

      await Pet.update(
        {
          status:false
        }, {
          where: {
          pet_id,
          }
        }
      );
      
      const updatedPet = await PetService.findPet(pet_id)
      return res.status(200).json(updatedPet);
    } catch (error) {
      return res.status(500).json("Falha ao deletar cadastro do Pet");
    }
  },
};

module.exports = PetController;
