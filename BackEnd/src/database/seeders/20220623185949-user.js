'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('User', [{
      name_user: 'Carlos Alberto',
      email: 'carlos@hotmail.com',
      address: "Rua Sete de Setembro 401",
      password: 'carlinhos123',
      phone: "(11) 9889-7754",
      comments: "bla bla",
      image_user:"www.cloudinary.com",
      createdAt: new Date(),
      updatedAt: new Date(),
    }])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('User', null, {});
  }
};
