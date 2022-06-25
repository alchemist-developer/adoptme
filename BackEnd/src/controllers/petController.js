const { Pet } = require("../models");
const cloudinary = require("../configs/cloudinary")
const fs = require('fs')

const PetController = {
  async create(req, res) {
    try {
      const { name_pet, type, size, gender, address, state, comments, age, phone } = req.body;

      const {
        user_id: user_id,
        name_user: name_user,
      } = req.auth;


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
        user_id,
        name_pet,
        name_user,
        type,
        size,
        gender,
        address,
        state,
        comments,
        age,
        phone,
        image_pet01,
        image_pet02,
        image_pet03
      });

      res.json(newPet);
    } catch (error) {
      res.json("Não foi possível publicar o Pet");
      console.error(error);
    }
  },

  async listAllPets(req, res) {
    try {
      const listPets = await Pet.findAll();
      res.status(201).json(listPets);
    } catch (error) {
      res.json("Falha ao listar os pets");
      console.error(error);
    }
  },

  async updatePet(req, res) {
    try {
      const { pet_id } = req.params;
      const { name_pet, type, size, gender, address, state, comments, age, phone } = req.body;
      const { name_user } = req.auth;

      const petByUser = await Post.count({
        where: {
          pet_id: pet_id,
          name_user,
        },
      });

      if (!petByUser) {
        return res.status(400).json("Erro ao tentar atualizar dados do Pet");
      }

      const updatedPet = await Pet.update(
        {
            name_pet,
            type,
            size,
            gender,
            address,
            state,
            comments,
            age,
            phone
        },
        {
          where: {
            pet_id: pet_id,
          },
        }
      );
      res.status(201).json("Pet atualizado com sucesso");
    } catch (error) {
      res.status(404).json("Verfique os dados e tente novamente");
      console.error(error);
    }
  },

  async deletePet(req, res) {
    try {
      const { pet_id } = req.params;
      const { name_user } = req.auth;

      const petByUser = await Pet.count({
        where: {
          post_id: pet_id,
          name_user: name_user,
        },
      });

      if (!petByUser) {
        return res.status(400).json("Erro ao tentar deletar cadastro do Pet");
      }

      await Pet.destroy({
        where: {
          pet_id: pet_id,
        },
      });

      res.status(201).json("Cadastro do Pet deletado com sucesso");
    } catch (error) {
      res.json("Falha ao deletar cadastro do Pet");
      console.error(error);
    }
  },
};

module.exports = PetController;
