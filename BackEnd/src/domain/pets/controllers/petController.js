const { Pet } = require("../../../database/models");
const PetService = require('../services/petService')

const PetController = {
  async create(req, res) {
    try {
      
      const {user_id} = req.auth;
      const file = req.files
      
      const {image_pet01, image_pet02, image_pet03} = await PetService.registerImages(file)
      
      const newPet = await Pet.create({
        ...req.body,
        user_id,
        status:true,
        image_pet01,
        image_pet02,
        image_pet03
      });

      res.status(201).json(newPet);
    } catch (error) {
      res.status(500).json("Não foi possível publicar o Pet");
      console.log(error)
    }
  },

  async listAllPets(req, res) {
    try {
      const listPets = await Pet.findAll();
      res.status(200).json(listPets);
    } catch (error) {
      res.status(500).json("Falha ao listar os pets");
    }
  },

  async updatePet(req, res) {
    try {
      const { pet_id } = req.params;
      const { user_id } = req.auth;
      const file = req.files
    
      const petByUser = await PetService.findPetByUser(user_id,pet_id)
      
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
      res.status(200).json(updatedPet);

    } catch (error) {
      res.status(500).json("Erro ao atualizar o pet");
    }
  },

  async deletePet(req, res) {
    try {
      const { pet_id } = req.params;
      const { user_id } = req.auth;

      const petByUser = await PetService.findPetByUser(user_id,pet_id)

      if (!petByUser) {
        return res.status(404).json("Erro ao encontrar o pet!");
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
      res.status(500).json("Falha ao deletar cadastro do Pet");
    }
  },
};

module.exports = PetController;
