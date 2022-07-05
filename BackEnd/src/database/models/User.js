const db = require('../index');
const { DataTypes } = require("sequelize");

const User = db.define(
  "user",
  {
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name_user: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      unique: true,
      allowNull: false,
      type: DataTypes.STRING,
    },
    address: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    mobile: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    whats: {
      allowNull: false,
      type: DataTypes.BOOLEAN,
    },
    phone: {
      type: DataTypes.STRING,
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    comments: {
      type: DataTypes.STRING,
    },
    status:{
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    image_user:{
      allowNull: false,
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
    tableName: "user",
  }
);

module.exports = User;
