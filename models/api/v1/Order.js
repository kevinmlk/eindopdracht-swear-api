// Include mongoose
const mongoose = require('mongoose');

// Define schema
const orderSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  user: String
});

// Define model
const Order = mongoose.model('Order', orderSchema);

// Export model
module.exports = Order;