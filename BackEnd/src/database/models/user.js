
const db = require("../index");
const { DataTypes } = require("sequelize");

const User = db.define(
  "User",
  {
    user_id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name_user: {
      allowNull: false,
      type: DataTypes.STRING,    
    },
    email: {
      unique: true,
      allowNull: false,
      type: DataTypes.STRING
    },
    address: {
      allowNull: false,
      type: DataTypes.STRING
    },
    phone: {
      allowNull: false,
      type: DataTypes.STRING
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING
    },
    comments: {
      allowNull: false,
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
    tableName: "user",
  }
);

module.exports = User;