const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const validate = require('../validation/userValidator');

router.route('/users')
.get(userController.getAllUsers)
.post(validate.validateUserData, userController.createUser);

router.route('/users/:id')
.get(userController.getUserById)
.put(validate.validateUserData, userController.updateUser)
.delete(userController.deleteUser);

module.exports = router;
