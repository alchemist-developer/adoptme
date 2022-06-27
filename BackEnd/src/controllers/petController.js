const { Pet } = require("../models");
const cloudinary = require("../configs/cloudinary")
const fs = require('fs')

const PetController = {
  async create(req, res) {
    try {
      
      const {user_id: user_id,} = req.auth;


      const file = req.files
       
        if(file.length==1){
          const uploadPathOne = await cloudinary.uploads(file[0].path,'adoptme/pets')
          image_pet01=uploadPathOne.imageUrl
          image_pet02=null
          image_pet03=null
          fs.unlinkSync(file[0].path);
        }

        if(file.length==2){
          const uploadPathOne = await cloudinary.uploads(file[0].path,'adoptme/pets')
          const uploadPathTwo = await cloudinary.uploads(file[1].path,'adoptme/pets')
          image_pet01=uploadPathOne.imageUrl
          image_pet02=uploadPathTwo.imageUrl
          image_pet03=null
          fs.unlinkSync(file[0].path);
          fs.unlinkSync(file[1].path);
        }

        if(file.length==3){
          const uploadPathOne = await cloudinary.uploads(file[0].path,'adoptme/pets')
          const uploadPathTwo = await cloudinary.uploads(file[1].path,'adoptme/pets')
          const uploadPathThree = await cloudinary.uploads(file[2].path,'adoptme/pets')
          image_pet01=uploadPathOne.imageUrl
          image_pet02=uploadPathTwo.imageUrl
          image_pet03=uploadPathThree.imageUrl
          fs.unlinkSync(file[0].path);
          fs.unlinkSync(file[1].path);
          fs.unlinkSync(file[2].path);
        }
        

      const newPet = await Pet.create({
        ...req.body,
        user_id,
        status:true,
        image_pet01,
        image_pet02,
        image_pet03
      });

      res.json(newPet);
    } catch (error) {
      res.status(500).json("Não foi possível publicar o Pet");
      console.error(error);
    }
  },

  async listAllPets(req, res) {
    try {
      const listPets = await Pet.findAll();
      res.status(201).json(listPets);
    } catch (error) {
      res.status(500).json("Falha ao listar os pets");
      console.error(error);
    }
  },

  async updatePet(req, res) {
    try {
      const { pet_id } = req.params;
      const { user_id } = req.auth;
      const file = req.files
    
      const petByUser = await Pet.count({
        where: {
          pet_id,
          user_id,
        },
      });
      
      if (!petByUser) {
        return res.status(404).json("Pet não existe ou não pertence a este usuário");
      }

      const findPet = await Pet.findByPk(pet_id);

      if(file.length==1){
        const uploadPathOne = await cloudinary.uploads(file[0].path,'adoptme/pets')
        image_pet01=uploadPathOne.imageUrl
        image_pet02=findPet.image_pet02
        image_pet03=findPet.image_pet03
        fs.unlinkSync(file[0].path);
      }

      if(file.length==2){
        const uploadPathOne = await cloudinary.uploads(file[0].path,'adoptme/pets')
        const uploadPathTwo = await cloudinary.uploads(file[1].path,'adoptme/pets')
        image_pet01=uploadPathOne.imageUrl
        image_pet02=uploadPathTwo.imageUrl
        image_pet03=findPet.image_pet03
        fs.unlinkSync(file[0].path);
        fs.unlinkSync(file[1].path);
      }

      if(file.length==3){
        const uploadPathOne = await cloudinary.uploads(file[0].path,'adoptme/pets')
        const uploadPathTwo = await cloudinary.uploads(file[1].path,'adoptme/pets')
        const uploadPathThree = await cloudinary.uploads(file[2].path,'adoptme/pets')
        image_pet01=uploadPathOne.imageUrl
        image_pet02=uploadPathTwo.imageUrl
        image_pet03=uploadPathThree.imageUrl
        fs.unlinkSync(file[0].path);
        fs.unlinkSync(file[1].path);
        fs.unlinkSync(file[2].path);
      }


      await Pet.update(
        {
          ...req.body,
          image_pet01,
          image_pet02,
          image_pet03
        }
        ,
        {
          where: {
            pet_id,
          },
        }
      );
      
      const updatedPet = await Pet.findByPk(pet_id);
      
      res.status(200).json(updatedPet);
    } catch (error) {
      res.status(500).json("Erro ao atualizar o pet");
      console.error(error);
    }
  },

  async deletePet(req, res) {
    try {
      const { pet_id } = req.params;
      const { user_id } = req.auth;

      const petByUser = await Pet.count({
        where: {
          pet_id,
          user_id,
        },
      });

      if (!petByUser) {
        return res.status(404).json("Erro ao encontrar o pet!");
      }

      const findPet = await Pet.findByPk(pet_id)
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

      
      const updatedPet = await Pet.findByPk(pet_id)

      return res.status(200).json(updatedPet);
    } catch (error) {
      res.status(500).json("Falha ao deletar cadastro do Pet");
      console.error(error);
    }
  },
};

module.exports = PetController;
