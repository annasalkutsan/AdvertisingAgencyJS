const { DataTypes } = require("sequelize");
const sequelize = require("../database");
const Order = require("./orderModel");
const Executor = require("./executorModel");
const Service = require("./serviceModel");

const Task = sequelize.define("Task", {
  TaskID: {
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
  OrdersID: {
    type: DataTypes.INTEGER,
    references: {
      model: Order,
      key: "OrderID",
    },
  },
  ExecutorID: {
    type: DataTypes.INTEGER,
    references: {
      model: Executor,
      key: "ExecutorID",
    },
  },
  ServiceID: {
    type: DataTypes.INTEGER,
    references: {
      model: Service,
      key: "ServiceID",
    },
  },
});

module.exports = Task;
