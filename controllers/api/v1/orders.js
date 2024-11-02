// Include model
const Order = require('../../../models/api/v1/Order');

// Define controllers

// Get all orders - index
const index = async (req, res) => {
  try {
    const orders = await Order.find();
    res.json({
      "status": "success",
      "message": "GETTING orders",
      "data": {
        "orders": orders
      }
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Export controllers
module.exports = {
  index
};