// Include models
const User = require('../../../models/api/v1/User');

// Define controllers
const index = async (req, res) => {
  try {
    // Get all users
    const users = await User.find();

    // Send response
    res.json({
      status: "success",
      message: "GETTING users",
      data: {
        users: users
      }
    });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
}

const show = async (req, res) => {
  try {
    // Get user
    const user = await User.findById(req.params.id);

    // Send response
    res.json({
      status: "success",
      message: "GETTING user",
      data: {
        user: user
      }
    });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
}

const destroy = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);

    // Send response
    res.json({
      status: "success",
      message: "DELETING user",
      data: {
        user: user
      }
    });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
}

// const create = async (req, res) => {
//   try {
//     // Create order
//     let user = new User();
//     user.firstname = req.body.firstname;
//     user.lastname = req.body.lastname;
//     user.email = req.body.email;
//     user.password = req.body.password;
//     user.phone = req.body.phone;
//     user.role = req.body.role;
//     user.street = req.body.street;
//     user.city = req.body.city;
//     user.postalCode = req.body.postalCode;
//     user.country = req.body.country;

//     // Save order
//     const savedUser = await user.save();

//     // Send response
//     res.json({
//       status: "success",
//       message: "CREATING user",
//       data: {
//         user: savedUser
//       }
//     });
//   } catch (err) {
//     res.status(500).json({ status: "error", message: err.message });
//   }
// }

// Export controller
module.exports = {
  index,
  show,
  destroy,
  // create
}