const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');
const validate = require('../validation/orderValidator');

router.route('/orders')
.get(orderController.getAllOrders)
.post(validate.validateOrderData, orderController.createOrder);

router.route('/orders/:id')
.get(orderController.getOrderById)
.put(validate.validateOrderData, orderController.updateOrder)
.delete(orderController.deleteOrder);

module.exports = router;
