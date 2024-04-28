const Order = require('../models/orderModel');

const orderController = {

  getAllOrders: async (req, res) => {
    try {
      const orders = await Order.findAll();
      res.json(orders);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getOrderById: async (req, res) => {
    const { id } = req.params;
    try {
      const order = await Order.findByPk(id);
      if (!order) {
        return res.status(404).json({ error: 'Заказ не найден' });
      }
      res.json(order);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  createOrder: async (req, res) => {
    const { Status, StartData, FinishData, UserID, TaskID } = req.body;
    try {
      const newOrder = await Order.create({ Status, StartData, FinishData, UserID, TaskID  });
      res.status(201).json(newOrder);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  updateOrder: async (req, res) => {
    const { id } = req.params;
    const { Status, StartData, FinishData, UserID, TaskID  } = req.body;
    try {
      const order = await Order.findByPk(id);
      if (!order) {
        return res.status(404).json({ error: 'Заказ не найден' });
      }
      await order.update({ Status, StartData, FinishData, UserID, TaskID });
      res.json(order);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  deleteOrder: async (req, res) => {
    const { id } = req.params;
    try {
      const order = await Order.findByPk(id);
      if (!order) {
        return res.status(404).json({ error: 'Заказ не найден' });
      }
      await order.destroy();
      res.json({ message: 'Заказ успешно удален' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

module.exports = orderController;
