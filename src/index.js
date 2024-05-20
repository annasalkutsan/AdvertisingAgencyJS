const express = require('express')
const db = require('./database')

const port = 8080
const app = express()

app.use(express.json({ extended: true}))

app.use(require('./routes/materialRoutes.js'))
app.use(require('./routes/serviceRoutes.js'))
app.use(require('./routes/orderRentRoutes.js'))
app.use(require('./routes/rentRoutes.js'))
app.use(require('./routes/taskRoutes.js'))
app.use(require('./routes/userRoutes.js'))
app.use(require('./routes/orderRoutes.js'))
app.use(require('./routes/executorRoutes.js'))

app.get('/', (req, res) => {
  res.send('Привет, сервер запущен!');
});

app.listen(port, 'localhost', () => {
  console.log('Сервер запущен по адресу "http://localhost:%d"', port)

  // После запуска сервера, запускаем движок Базы Данных и синхронизируем модели
  db.authenticate()
  .then(() => {
    db.sync()
    .then(() => console.log('Все модели успешно синхронизированы.'))
    .catch(err => console.error('Ошибка синхронизации моделей:', err))
    console.log('Подключение к базе данных установлено успешно.')
  })
  .catch(err => console.error('Ошибка подключения к базе данных:', err));
})
