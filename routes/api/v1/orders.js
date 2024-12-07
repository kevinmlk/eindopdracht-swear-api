// Include express
const express = require('express');

// Include router
const router = express.Router();

// Include controller
const orderController = require('../../../controllers/api/v1/orders');

// Define routes
router.get('/', orderController.index);

router.get('/:id', orderController.show);

router.post('/', orderController.create);

router.patch('/:id', orderController.update);

router.delete('/:id', orderController.destroy);

// Export routes
module.exports = router;