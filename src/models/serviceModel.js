const { DataTypes } = require("sequelize");
const sequelize = require("../database");
const Material = require("./materialModel");

const Service = sequelize.define("Service", {
  ServiceID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  Name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Deadline: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  MaterialID: {
    type: DataTypes.INTEGER,
    references: {
      model: Material,
      key: "MaterialID",
    },
  },
});

module.exports = Service;
