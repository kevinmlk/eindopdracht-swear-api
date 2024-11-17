// Include models
const Order = require('../../../models/api/v1/Order');

// Define controllers
const index = async (req, res) => {
  try {
    // Get all orders
    const orders = await Order.find();

    // Send response
    res.json({
      status: "success",
      message: "GETTING orders",
      data: {
        orders: orders
      }
    });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
}

const create = async (req, res) => {
  try {
    // Create order
    let order = new Order();
    

    // Save order
    const savedOrder = await order.save();

    // Send response
    res.json({
      status: "success",
      message: "CREATING order",
      data: {
        order: savedOrder
      }
    });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
}

// Export controller
module.exports = {
  index,
  create
}