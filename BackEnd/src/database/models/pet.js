const db = require("../index");
const { DataTypes } = require("sequelize");

const Pet = db.define(
  "Pet",
  {
    pet_id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "user", key: "user_id" },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
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
    createdAt: {
      allowNull: true,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: true,
      type: DataTypes.DATE
    }
  },
  {
    tableName: "pet",
  }
);

module.exports = Pet;