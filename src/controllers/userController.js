const User = require('../models/userModel');

const userController = {
  // Получение всех пользователей
  getAllUsers: async (req, res) => {
    try {
      const users = await User.findAll();
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Получение пользователя по идентификатору
  getUserById: async (req, res) => {
    const { id } = req.params;
    try {
      const user = await User.findByPk(id);
      if (!user) {
        return res.status(404).json({ error: 'Пользователя не существует' });
      }
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Создание нового пользователя
  createUser: async (req, res) => {
    const { Surname, Name, MiddleName, Email } = req.body;
    try {
      const newUser = await User.create({ Surname, Name, MiddleName, Email });
      res.status(201).json(newUser);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  // Обновление данных пользователя
  updateUser: async (req, res) => {
    const { id } = req.params;
    const { Surname, Name, MiddleName, Email } = req.body;
    try {
      const user = await User.findByPk(id);
      if (!user) {
        return res.status(404).json({ error: 'Пользователя не существует' });
      }
      await user.update({ Surname, Name, MiddleName, Email });
      res.json(user);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  // Удаление пользователя
  deleteUser: async (req, res) => {
    const { id } = req.params;
    try {
      const user = await User.findByPk(id);
      if (!user) {
        return res.status(404).json({ error: 'Пользователя не существует' });
      }
      await user.destroy();
      res.json({ message: 'Пользователь успешно удален' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

module.exports = userController;
