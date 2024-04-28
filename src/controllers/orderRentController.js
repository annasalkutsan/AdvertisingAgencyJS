const OrderRent = require("../models/orderRentModel");

const orderRentController = {
  getAllOrdersRents: async (req, res) => {
    try {
      const ordersRents = await OrderRent.findAll();
      res.json(ordersRents);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getOrderRentById: async (req, res) => {
    const { id } = req.params;
    try {
      const orderRent = await OrderRent.findByPk(id);
      if (!orderRent) {
        return res.status(404).json({ error: "Заказ по аренде не найден" });
      }
      res.json(orderRent);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  createOrderRent: async (req, res) => {
    const { Status, CountDays, UserID, RentID } = req.body;
    try {
      const newOrderRent = await Order.create({
        Status,
        CountDays,
        UserID,
        RentID,
      });
      res.status(201).json(newOrderRent);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  updateOrderRent: async (req, res) => {
    const { id } = req.params;
    const { Status, CountDays, UserID, RentID } = req.body;
    try {
      const orderRent = await OrderRent.findByPk(id);
      if (!orderRent) {
        return res.status(404).json({ error: "Заказ по аренде не найден" });
      }
      await orderRent.update({ Status, CountDays, UserID, RentID });
      res.json(orderRent);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  deleteOrderRent: async (req, res) => {
    const { id } = req.params;
    try {
      const orderRent = await OrderRent.findByPk(id);
      if (!orderRent) {
        return res.status(404).json({ error: "Заказ по аренде не найден" });
      }
      await orderRent.destroy();
      res.json({ message: "Заказ по аренде успешно удален" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = orderRentController;
