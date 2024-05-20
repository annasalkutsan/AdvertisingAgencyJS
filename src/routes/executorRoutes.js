const express = require('express');
const router = express.Router();
const executorController = require('../controllers/executorController');
const validate = require('../validation/executorValidator');

router.route('/executors')
    .get(executorController.getAllExecutors)  // GET /executors
    .post(validate.validateExecutorData, executorController.createExecutor); // POST /executors

router.route('/executors/:id')
    .get(executorController.getExecutorById)   // GET /executors/:id
    .put(validate.validateExecutorData, executorController.updateExecutor)    // PUT /executors/:id
    .delete(executorController.deleteExecutor);// DELETE /executors/:id

module.exports = router;
