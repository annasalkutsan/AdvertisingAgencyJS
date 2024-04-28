const Executor = require('../models/executorModel');

const executorController = {

  getAllExecutors: async (req, res) => {
    try {
      const executors = await Executor.findAll();
      res.json(executors);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getExecutorById: async (req, res) => {
    const { id } = req.params;
    try {
      const executor = await Executor.findByPk(id);
      if (!executor) {
        //TODO:Исполнителя не существует
        return res.status(404).json({ error: 'Исполнителя не существует' });
      }
      res.json(executor);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  createExecutor: async (req, res) => {
    const { Surname, Name, MiddleName } = req.body;
    try {
      const newExecutor = await Executor.create({ Surname, Name, MiddleName });
      res.status(201).json(newExecutor);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  updateExecutor: async (req, res) => {
    const { id } = req.params;
    const { Surname, Name, MiddleName } = req.body;
    try {
      const executor = await Executor.findByPk(id);
      if (!executor) {
        return res.status(404).json({ error: 'Исполнителя не существует' });
      }
      await executor.update({ Surname, Name, MiddleName });
      res.json(executor);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  deleteExecutor: async (req, res) => {
    const { id } = req.params;
    try {
      const executor = await Executor.findByPk(id);
      if (!executor) {
        return res.status(404).json({ error: 'сполнителя не существует' });
      }
      await executor.destroy();
      res.json({ message: 'Исполнитель успешно удален' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

module.exports = executorController;
