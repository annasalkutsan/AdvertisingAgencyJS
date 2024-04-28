const { DataTypes } = require("sequelize");
const sequelize = require("../database");
const Executor = require("./executorModel");

const Rent = sequelize.define("Rent", {
  RentID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  PricePerDay: {
    type: DataTypes.INTEGER,
  },
  ExecutorID: {
    type: DataTypes.INTEGER,
    references: {
      model: Executor,
      key: "ExecutorID",
    },
  },
});

module.exports = Rent;
