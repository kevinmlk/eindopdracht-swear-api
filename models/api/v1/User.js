// Include mongoose
const mongoose = require('mongoose');

// Schema
const Schema = mongoose.Schema;

// Include passport local mongoose
const passportLocalMongoose = require('passport-local-mongoose');

// Define schema
const User = new Schema({
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
    unique: true
  },
  phone: {
    type: String,
    required: true,
    unique: true
  },
  role: {
    type: String,
    required: true,
    enum: ['user', 'admin'],
    default: 'user'
  },
  address: {
    street: {
      type: String,
    },
    city: {
      type: String,
    },
    postalCode: {
      type: String,
    },
    country: {
      type: String,
    }
  }
});

User.plugin(passportLocalMongoose);

// Define schema
// const userSchema = new mongoose.Schema({
//   firstname: {
//     type: String,
//     required: true,
//   },
//   lastname: {
//     type: String,
//     required: true,
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true
//   },
//   password: {
//     type: String,
//     required: true,
//   },
//   phone: {
//     type: String,
//     required: true,
//   },
//   role: {
//     type: String,
//     required: true,
//     enum: ['user', 'admin'],
//     default: 'user'
//   },
//   address: {
//     street: {
//       type: String,
//     },
//     city: {
//       type: String,
//     },
//     postalCode: {
//       type: String,
//     },
//     country: {
//       type: String,
//     }
//   }
// });

// Define model
// const User = mongoose.model('User', userSchema);

// Export model
module.exports = mongoose.model('User', User);