const { DataTypes } = require("sequelize");
const sequelize = require("../database");
const User = require("./userModel");

const Order = sequelize.define("Order", {
  OrderID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  Status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  StartData: {
    type: DataTypes.DATE,
  },
  FinishData: {
    type: DataTypes.DATE,
  },
  UserID: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: "UserID",
    },
  },
});

module.exports = Order;
