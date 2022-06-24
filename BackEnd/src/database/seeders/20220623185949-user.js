'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('User', [{
      name_user: 'Carlos Alberto',
      email: 'carlos@gmail.com',
      address: "Rua Sete de Setembro 401",
      password: 'carlinhos123',
      phone: "(11) 9889-7754",
      comments: "bla bla",
      createdAt: new Date(),
      updatedAt: new Date(),
    }])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
