const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const User = sequelize.define("User", {
  UserID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  Surname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  MiddleName: {
    type: DataTypes.STRING,
  },
  Email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = User;
