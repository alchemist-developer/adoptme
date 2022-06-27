'use strict';

const {faker} = require("@faker-js/faker")
const bcrypt = require('bcrypt')
let seed = []
const cripPassword = bcrypt.hashSync('123456',6)


for(let i=10; i<20; i++) {
  seed.push(
    {
      name_user: faker.name.findName(),
      email: faker.internet.email(),
      address:faker.address.city(),
      password: cripPassword,
      phone:	faker.finance.amount(),
      comments:faker.random.alpha(),
      status: faker.datatype.boolean(),
      image_user:faker.image.cats(),
      createdAt: new Date(),
      updatedAt: new Date(),
    }
  )
}

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('User', [{
      name_user: 'Carlos Alberto',
      email: 'carlos@hotmail.com',
      address: "Rua Sete de Setembro 401",
      password: bcrypt.hashSync('123456',6),
      phone: "(11) 9889-7754",
      comments: "bla bla",
      status:true,
      image_user:"www.cloudinary.com",
      createdAt: new Date(),
      updatedAt: new Date(),
    }])

    await queryInterface.bulkInsert("User", seed)
  },


  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('User', null, {});
  }
};
