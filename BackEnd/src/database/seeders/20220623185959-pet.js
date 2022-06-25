'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Pet', [{
      user_id: 2,
      name_pet: "Caramelo",
      type: "Cão",
      size: "Médio",
      gender: "Macho",
      address: "Rua Sete de Setembro, 401",
      state: "Santa Catarina",
      comments: "bla bla",
      age: "Filhote",
      phone: "(47) 8889-9985",
      image_pet01:"www.cloudinary.com",
      createdAt: new Date(),
      updatedAt: new Date(),
    }])
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('Pet', null, {});
  }
};
