const Material = require('../models/materialModel');

const materialController = {

  getAllMaterials: async (req, res) => {
    try {
      const materials = await Material.findAll();
      res.json(materials);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getMaterialById: async (req, res) => {
    const { id } = req.params;
    try {
      const material = await Material.findByPk(id);
      if (!material) {
        return res.status(404).json({ error: 'Материала не существует' });
      }
      res.json(material);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  createMaterial: async (req, res) => {
    const {Name, Amount } = req.body;
    try {
      const newMaterial = await Material.create({ Name, Amount });
      res.status(201).json(newMaterial);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  updateMaterial: async (req, res) => {
    const { id } = req.params;
    const { Name, Amount } = req.body;
    try {
      const material = await Material.findByPk(id);
      if (!material) {
        return res.status(404).json({ error: 'Материала не существует' });
      }
      await material.update({ Name, Amount });
      res.json(material);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  deleteMaterial: async (req, res) => {
    const { id } = req.params;
    try {
      const material = await Material.findByPk(id);
      if (!material) {
        return res.status(404).json({ error: 'Материала не существует' });
      }
      await material.destroy();
      res.json({ message: 'Материал успешно удален' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

module.exports = materialController;
