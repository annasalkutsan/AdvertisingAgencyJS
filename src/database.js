const { Sequelize } = require('sequelize');

const database = new Sequelize('postgres', 'admin', '12345', {
  host: 'localhost',
  dialect: 'postgres',
  define: {
    timestamps: true // включение добавления полей createdAt и updatedAt к каждой таблице
  },
  logging: false
});

// database.authenticate()
//   .then(() => {
//     console.log('Подключение к базе данных установлено успешно.');
//   })
//   .catch(err => {
//     console.error('Ошибка подключения к базе данных:', err);
//   });

module.exports = database;
