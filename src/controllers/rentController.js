const Rent = require("../models/rentModel");

const rentController = {
  getAllRents: async (req, res) => {
    try {
      const rents = await Rent.findAll();
      res.json(rents);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getRentById: async (req, res) => {
    const { id } = req.params;
    try {
      const rent = await Rent.findByPk(id);
      if (!rent) {
        return res.status(404).json({ error: "Аренда не найдена" });
      }
      res.json(rent);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  createRent: async (req, res) => {
    const { PricePerDay, ExecutorID } = req.body;
    try {
      const newRent = await Rent.create({
        PricePerDay,
        ExecutorID,
      });
      res.status(201).json(newRent);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  updateRent: async (req, res) => {
    const { id } = req.params;
    const { PricePerDay, ExecutorID } = req.body;
    try {
      const rent = await Rent.findByPk(id);
      if (!rent) {
        return res.status(404).json({ error: "Места не существует" });
      }
      await rent.update({ PricePerDay, ExecutorID });
      res.json(rent);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  deleteRent: async (req, res) => {
    const { id } = req.params;
    try {
      const rent = await Rent.findByPk(id);
      if (!rent) {
        return res.status(404).json({ error: "Места не существует" });
      }
      await rent.destroy();
      res.json({ message: "Аренда успешно удалена" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = rentController;
