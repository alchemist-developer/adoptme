'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Pet', [{
      user_id: 1,
      name_pet: "Caramelo",
      type: "Cão",
      size: "Médio",
      gender: "Macho",
      address: "Rua Sete de Setembro, 401",
      state: "Santa Catarina",
      comments: "bla bla",
      age: "Filhote",
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
