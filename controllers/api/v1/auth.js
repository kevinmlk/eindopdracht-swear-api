// Include user model
const User = require('../../../models/api/v1/User');

// Include jsonwebtoken
const jwt = require('jsonwebtoken');

// Include passport
// const passport = require('../../../passport/api/v1/passport');

// Register user method
const register = async (req, res) => {
  try {
    // Create user
    const user = new User();

    // Set user data
    user.firstname = req.body.firstname;
    user.lastname = req.body.lastname;
    user.email = req.body.email;
    user.username = req.body.username;
    await user.setPassword(req.body.password);
    user.phone = req.body.phone;
    user.role = req.body.role;
    user.address.street = req.body.address.street;
    user.address.city = req.body.address.city;
    user.address.postalCode = req.body.address.postalCode;
    user.address.country = req.body.address.country;

    // Save user
    const savedUser = await user.save();

    // Generate token
    const token = jwt.sign({ id: savedUser._id }, 'secret');

    // Send response
    res.json({
      status: "success",
      message: "CREATING user",
      data: {
        user: savedUser,
        token: token
      }
    });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
}

// Login user method
const login = async (req, res) => {
  try {

    const user = await User.authenticate()(req.body.username, req.body.password).then(result => {

      if (!result.user) {
        return res.status(401).json({ status: "failed", message: "User not found" });
      }

      // Generate token
      const token = jwt.sign({ id: result.user._id }, 'secret');

      // Send response
      res.json({
        status: "success",
        message: "LOGGING IN user",
        data: {
          user: result.user._id,
          token: token
        }
      });
    });

  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
}

// Export controller
module.exports = { register, login };