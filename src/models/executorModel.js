const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const Executor = sequelize.define("Executor", {
  ExecutorID: {
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
});

module.exports = Executor;
