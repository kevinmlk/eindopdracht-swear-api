// Include express
const express = require('express');

// Include router
const router = express.Router();

// Include controller
const OrdersController = require('../../../controllers/api/v1/orders');

// Define routes
router.get('/', OrdersController.index);
// router.get('/:id', OrdersController.show);
// router.post('/', OrdersController.create);
// router.put('/:id', OrdersController.update); // Only for admins
// router.delete('/:id', OrdersController.destroy); // Only for admins

// Export routes
module.exports = router;