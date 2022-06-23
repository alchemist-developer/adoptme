'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pet extends Model {
    
    static associate(models) {
      ser.hasMany (models.pet, {foreignKey: 'user_id'})
    }
  }
  Pet.init({
    pet_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    gender: DataTypes.STRING,
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    state: DataTypes.STRING,
    comments: DataTypes.STRING,
    age: DataTypes.STRING,
    phone: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'pet',
  });
  return Pet;
};