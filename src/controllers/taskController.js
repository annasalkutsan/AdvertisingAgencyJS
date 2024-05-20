const Task = require("../models/taskModel");

const taskController = {
  getAllTasks: async (req, res) => {
    try {
      const tasks = await Task.findAll();
      res.json(tasks);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getTaskById: async (req, res) => {
    const { id } = req.params;
    try {
      const task = await Task.findByPk(id);
      if (!task) {
        return res.status(404).json({ error: "Задача не найдена" });
      }
      res.json(task);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  createTask: async (req, res) => {
    const { Status, StartData, FinishData, OrdersID, ExecutorID, ServiceID } = req.body;
    try {
      const newTask = await Task.create({
        Status, StartData, FinishData, OrdersID, ExecutorID, ServiceID
      });
      res.status(201).json(newTask);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  updateTask: async (req, res) => {
    const { id } = req.params;
    const { Status, StartData, FinishData, OrdersID, ExecutorID, ServiceID  } = req.body;
    try {
      const task = await Task.findByPk(id);
      if (!task) {
        return res.status(404).json({ error: "Задача не найдена" });
      }
      await task.update({Status, StartData, FinishData, OrdersID, ExecutorID, ServiceID });
      res.json(task);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  deleteTask: async (req, res) => {
    const { id } = req.params;
    try {
      const task = await Task.findByPk(id);
      if (!task) {
        return res.status(404).json({ error: "Задача не найдена" });
      }
      await task.destroy();
      res.json({ message: "Задача успешно удалена" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = taskController;
