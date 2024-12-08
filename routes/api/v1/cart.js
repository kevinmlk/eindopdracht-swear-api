// Include express
const express = require('express');

// Include router
const router = express.Router();

// Include controller
const cartController = require('../../../controllers/api/v1/cart');

// Define routes
router.get('/', cartController.index);

// router.get('/:id', orderController.show);

router.get('/user/:userId', cartController.showByUser);

router.post('/', cartController.create);

// router.patch('/:id', orderController.update);

router.delete('/:id', cartController.destroy);

// Export routes
module.exports = router;