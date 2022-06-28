const {Pet} = require('../../../database/models')
const cloudinary = require("../../../configs/cloudinary")
const fs = require('fs')

const PetService = {

    async registerImages(file){
        
        if(file.length==1){
            const uploadPathOne = await cloudinary.uploads(file[0].path,'adoptme/pets')
            image_pet01=uploadPathOne.imageUrl.substr(52,50)
            image_pet02=null
            image_pet03=null
            fs.unlinkSync(file[0].path);
          }
  
          if(file.length==2){
            const uploadPathOne = await cloudinary.uploads(file[0].path,'adoptme/pets')
            const uploadPathTwo = await cloudinary.uploads(file[1].path,'adoptme/pets')
            image_pet01=uploadPathOne.imageUrl.substr(52,50)
            image_pet02=uploadPathTwo.imageUrl.substr(52,50)
            image_pet03=null
            fs.unlinkSync(file[0].path);
            fs.unlinkSync(file[1].path);
          }
  
          if(file.length==3){
            const uploadPathOne = await cloudinary.uploads(file[0].path,'adoptme/pets')
            const uploadPathTwo = await cloudinary.uploads(file[1].path,'adoptme/pets')
            const uploadPathThree = await cloudinary.uploads(file[2].path,'adoptme/pets')
            image_pet01=uploadPathOne.imageUrl.substr(52,50)
            image_pet02=uploadPathTwo.imageUrl.substr(52,50)
            image_pet03=uploadPathThree.imageUrl.substr(52,50)
            fs.unlinkSync(file[0].path);
            fs.unlinkSync(file[1].path);
            fs.unlinkSync(file[2].path);
          }

        return {image_pet01,image_pet02,image_pet03}
    },

    async findPet(id){
        const findPet = await Pet.findByPk(id);
        return findPet;
    },

    async UserHasPet(user_id, pet_id){
        const petByUser = await Pet.count({
            where: {
              pet_id,
              user_id,
            },
          });

        return petByUser
    },

    async findAllPets(){
      const allPets = await Pet.findAll()
      return allPets
    },

    async findPetsByUser(user_id){
      const findPetsByUser = await Pet.findOne({
        where: {
          user_id,
          status:true
        },
      });

      return findPetsByUser
      
    },

    async updateImages(file, pet_id){
        const findPet = await this.findPet(pet_id)

        if(file.length==1){
            const uploadPathOne = await cloudinary.uploads(file[0].path,'adoptme/pets')
            image_pet01=uploadPathOne.imageUrl.substr(52,50)
            image_pet02=findPet.image_pet02
            image_pet03=findPet.image_pet03
            fs.unlinkSync(file[0].path);
          }
    
          if(file.length==2){
            const uploadPathOne = await cloudinary.uploads(file[0].path,'adoptme/pets')
            const uploadPathTwo = await cloudinary.uploads(file[1].path,'adoptme/pets')
            image_pet01=uploadPathOne.imageUrl.substr(52,50)
            image_pet02=uploadPathTwo.imageUrl.substr(52,50)
            image_pet03=findPet.image_pet03
            fs.unlinkSync(file[0].path);
            fs.unlinkSync(file[1].path);
          }
    
          if(file.length==3){
            const uploadPathOne = await cloudinary.uploads(file[0].path,'adoptme/pets')
            const uploadPathTwo = await cloudinary.uploads(file[1].path,'adoptme/pets')
            const uploadPathThree = await cloudinary.uploads(file[2].path,'adoptme/pets')
            image_pet01=uploadPathOne.imageUrl.substr(52,50)
            image_pet02=uploadPathTwo.imageUrl.substr(52,50)
            image_pet03=uploadPathThree.imageUrl.substr(52,50)
            fs.unlinkSync(file[0].path);
            fs.unlinkSync(file[1].path);
            fs.unlinkSync(file[2].path);
          }

          return{image_pet01,image_pet02,image_pet03}
    }


}

module.exports = PetService