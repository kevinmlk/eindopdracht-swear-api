// Include mongoose
const mongoose = require('mongoose');

// Define schema
const orderSchema = new mongoose.Schema({
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
  status: {
    type: String,
    enum: ['pending', 'processing', 'shipped', 'delivered', 'cancelled'],
    default: 'pending',
  },
  contactDetails: {
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    address: {
      street: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      postalCode: {
        type: String,
        required: true,
      },
      country: {
        type: String,
        required: true,
      }
    },
    orderDate: {
      type: Date,
      default: Date.now
    },
    lastUpdated: {
      type: Date,
      default: Date.now
    },
  },
});

// Define model
const Order = mongoose.model('Order', orderSchema);

// Export model
module.exports = Order;