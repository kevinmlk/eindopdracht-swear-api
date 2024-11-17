// Include express
const express = require('express');

// Include router
const router = express.Router();

// Include controller
const userController = require('../../../controllers/api/v1/users');

// Define routes
router.get('/', userController.index);

router.post('/', userController.create);

// Export routes
module.exports = router;