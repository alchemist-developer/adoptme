const db = require("../database/index");
const { DataTypes } = require("sequelize");
const { User } = require("./User");

const Pet = db.define(
  "pet",
  {
    pet_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: "user_id",
      },
    },
    name_pet: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    type: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    size: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    gender: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    address: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    state: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    comments: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    age: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    phone: {
      type: DataTypes.STRING,
    },
    status:{
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    image_pet01:{
      allowNull: false,
      type: DataTypes.STRING,
    },
    image_pet02:{
      allowNull: true,
      type: DataTypes.STRING,
    },
    image_pet03:{
      allowNull: true,
      type: DataTypes.STRING,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
  },
  {
    tableName: "pet",
  }
);

module.exports = Pet;
