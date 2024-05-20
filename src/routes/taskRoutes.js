const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');
const validate = require('../validation/taskValidator');

router.route('/tasks')
.get(taskController.getAllTasks)
.post(validate.validateTaskData, taskController.createTask);

router.route('/tasks/:id')
.get(taskController.getTaskById)
.put(validate.validateTaskData, taskController.updateTask)
.delete(taskController.deleteTask);

module.exports = router;
