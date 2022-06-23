'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Pet', [{
      name: "Caramelo",
      user_id: 1,
      gender: "macho",
      address: "Rua Sete de Setembro, 401",
      state: "Santa Catarina",
      comments: "bla bla",
      age: "filhote",
      phone: "(47) 8889-9985",
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
