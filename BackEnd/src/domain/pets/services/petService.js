const {Pet} = require('../../../database/models')
const {User} = require('../../../database/models')
const cloudinary = require("../../../configs/cloudinary")
const fs = require('fs')

const PetService = {

    async registerImages(file){
        
        if(file.length==1){
          
            const uploadPathOne = await cloudinary.uploads(file[0].path,'adoptme/pets')
            const image_pet01=uploadPathOne.imageUrl.substr(52,50)
            const image_pet02=''
            const image_pet03=''
            fs.unlinkSync(file[0].path);
            return {image_pet01: image_pet01, image_pet02: image_pet02, image_pet03: image_pet03}
          }
  
          if(file.length==2){
            const uploadPathOne = await cloudinary.uploads(file[0].path,'adoptme/pets')
            const uploadPathTwo = await cloudinary.uploads(file[1].path,'adoptme/pets')
            const image_pet01=uploadPathOne.imageUrl.substr(52,50)
            const image_pet02=uploadPathTwo.imageUrl.substr(52,50)
            const image_pet03=''
            fs.unlinkSync(file[0].path);
            fs.unlinkSync(file[1].path);
            return {image_pet01: image_pet01, image_pet02: image_pet02, image_pet03: image_pet03}
          }
  
          if(file.length==3){
            const uploadPathOne = await cloudinary.uploads(file[0].path,'adoptme/pets')
            const uploadPathTwo = await cloudinary.uploads(file[1].path,'adoptme/pets')
            const uploadPathThree = await cloudinary.uploads(file[2].path,'adoptme/pets')
            const image_pet01=uploadPathOne.imageUrl.substr(52,50)
            const image_pet02=uploadPathTwo.imageUrl.substr(52,50)
            const image_pet03=uploadPathThree.imageUrl.substr(52,50)
            fs.unlinkSync(file[0].path);
            fs.unlinkSync(file[1].path);
            fs.unlinkSync(file[2].path);
            return {image_pet01: image_pet01, image_pet02: image_pet02, image_pet03: image_pet03}
          }

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
      const allPets = await Pet.findAll({
        where:{status:true},
        include: [{ model: User, attributes: ["name_user"]}]
      })
      return allPets
    },

    async findPetsByUser(user_id){
      const findPetsByUser = await Pet.findAll({
        where: {
          user_id,
          status:true
        },
      });

      return findPetsByUser
      
    },

    async updateImages(file, pet_id){
        const findPet = await this.findPet(pet_id)
        
      console.log(file.length)

        if(file.lenght==0){
          var image_pet01=findPet.image_pet01
          var image_pet02=findPet.image_pet02
          var image_pet03=findPet.image_pet03
        }

        if(file.length==1){
            const uploadPathOne = await cloudinary.uploads(file[0].path,'adoptme/pets')
            var image_pet01=uploadPathOne.imageUrl.substr(52,50)
            var image_pet02=findPet.image_pet02
            var image_pet03=findPet.image_pet03
            fs.unlinkSync(file[0].path);
          }
    
          if(file.length==2){
            const uploadPathOne = await cloudinary.uploads(file[0].path,'adoptme/pets')
            const uploadPathTwo = await cloudinary.uploads(file[1].path,'adoptme/pets')
            var image_pet01=uploadPathOne.imageUrl.substr(52,50)
            var image_pet02=uploadPathTwo.imageUrl.substr(52,50)
            var image_pet03=findPet.image_pet03
            fs.unlinkSync(file[0].path);
            fs.unlinkSync(file[1].path);
            return {image_pet01: image_pet01, image_pet02: image_pet02, image_pet03: image_pet03}
          }
    
          if(file.length==3){
            const uploadPathOne = await cloudinary.uploads(file[0].path,'adoptme/pets')
            const uploadPathTwo = await cloudinary.uploads(file[1].path,'adoptme/pets')
            const uploadPathThree = await cloudinary.uploads(file[2].path,'adoptme/pets')
            var image_pet01=uploadPathOne.imageUrl.substr(52,50)
            var image_pet02=uploadPathTwo.imageUrl.substr(52,50)
            var image_pet03=uploadPathThree.imageUrl.substr(52,50)
            fs.unlinkSync(file[0].path);
            fs.unlinkSync(file[1].path);
            fs.unlinkSync(file[2].path);
            return {image_pet01: image_pet01, image_pet02: image_pet02, image_pet03: image_pet03}
          }
          const image_pet01=findPet.image_pet01
          const image_pet02=findPet.image_pet02
          const image_pet03=findPet.image_pet03

          return {image_pet01: image_pet01, image_pet02: image_pet02, image_pet03: image_pet03}
    },

    async updatePetPhone(user_id){
        const userOfPet = await User.findByPk(user_id)

        await Pet.update(
          {
            mobile:userOfPet.mobile,
            phone:userOfPet.phone
          }, {
            where: {
              user_id,
            }
          }
        );
    },

    async activatePetForDeletionTest(pet_id){
      await Pet.update({
          status:true
      }, {
          where: {
              pet_id,
          }
      })
  },

  async deActivatePetForEmptinessTest(pet_id){
    await Pet.update({
        status:false
    }, {
        where: {
            pet_id,
        }
    })
}
}




module.exports = PetService