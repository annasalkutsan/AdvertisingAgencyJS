const Service = require("../models/serviceModel");

const serviceController = {
  getAllServices: async (req, res) => {
    try {
      const services = await Service.findAll();
      res.json(services);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getServiceById: async (req, res) => {
    const { id } = req.params;
    try {
      const service = await Service.findByPk(id);
      if (!service) {
        return res.status(404).json({ error: "Услуга не найдена" });
      }
      res.json(service);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  createService: async (req, res) => {
    const { Name, Deadline, MaterialID } = req.body;
    try {
      const newService = await Service.create({
        Name, Deadline, MaterialID 
      });
      res.status(201).json(newService);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  updateService: async (req, res) => {
    const { id } = req.params;
    const {  Name, Deadline, MaterialID  } = req.body;
    try {
      const service = await Service.findByPk(id);
      if (!service) {
        return res.status(404).json({ error: "Услуга не найдена" });
      }
      await service.update({ Name, Deadline, MaterialID });
      res.json(service);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  deleteService: async (req, res) => {
    const { id } = req.params;
    try {
      const service = await Service.findByPk(id);
      if (!service) {
        return res.status(404).json({ error: "Услуга не найдена" });
      }
      await service.destroy();
      res.json({ message: "Услуга успешно удалена" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = serviceController;
