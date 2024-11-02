// Include mongoose
const mongoose = require('mongoose');

// Include Schema
const Schema = mongoose.Schema;

// Define order schema
const orderSchema = new mongoose.Schema({
  userId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  }
}, {
  timestamps: true
});

// Export order model
const Order = mongoose.model('Order', orderSchema);
module.exports = Order;
