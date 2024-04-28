const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const Material = sequelize.define("Material", {
  MaterialID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  Name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Amount: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Material;
