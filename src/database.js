const { Sequelize } = require('sequelize');

const database = new Sequelize('postgres', 'postgres', '12345', {
  host: 'localhost',
  dialect: 'postgres',
  define: {
    timestamps: true // включение добавления полей createdAt и updatedAt к каждой таблице
  },
  logging: false
});


module.exports = database;
