// Include mongoose
const mongoose = require('mongoose');

// Define schema
const cartSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  sneakerConfig: {
    shoeSize: {
      type: Number,
      required: true,
    },
    colorOptions: {
      laces: {
        type: String,
        required: true,
      },
      sole: {
        type: String,
        required: true,
      },
      upper: {
        type: String,
        required: true,
      },
      extraOption1: {
        type: String,
      },
      extraOption2: {
        type: String,
      }
    },
    materialOptions: {
      laces: {
        type: String,
      },
      sole: {
        type: String,
      },
      upper: {
        type: String,
      }
    },
    charms: [
      {
        type: String,
      }
    ],
    patterns: {
      type: String,
    },
    customText: {
      type: String,
    }
  },
});

// Define model
const Cart = mongoose.model('Cart', cartSchema);

// Export model
module.exports = Cart;