const { DataTypes } = require("sequelize");
const sequelize = require("../database");
const User = require("./userModel");
const Rent = require("./rentModel");

const OrderRent = sequelize.define("OrderRent", {
  OrderRentID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  Status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  CountDays: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  UserID: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: "UserID",
    },
  },
  RentID: {
    type: DataTypes.INTEGER,
    references: {
      model: Rent,
      key: "RentID",
    },
  },
});

module.exports = OrderRent;
