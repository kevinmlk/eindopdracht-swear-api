// Include models
const Cart = require('../../../models/api/v1/Cart');

// Define controllers

const index = async (req, res) => {
  try {
    // Get all carts
    const carts = await Cart.find();

    // Send response
    res.json({
      status: "success",
      message: "GETTING carts",
      data: {
        carts: carts
      }
    });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
}

const showByUser = async (req, res) => {
  try {
    // Get order
    const cart = await Cart.find({ userId: req.params.userId });

    // Send response
    res.json({
      status: "success",
      message: "GETTING cart",
      data: {
        cart: cart
      }
    });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
}

const create = async (req, res) => {
  try {
    // Create order
    const cart = new Cart();

    // Set order data
    cart.userId = req.body.userId;
    cart.sneakerConfig.shoeSize = req.body.sneakerConfig.shoeSize;
    cart.sneakerConfig.colorOptions.laces = req.body.sneakerConfig.colorOptions.laces;
    cart.sneakerConfig.colorOptions.sole = req.body.sneakerConfig.colorOptions.sole;
    cart.sneakerConfig.colorOptions.upper = req.body.sneakerConfig.colorOptions.upper;
    cart.sneakerConfig.colorOptions.extraOption1 = req.body.sneakerConfig.colorOptions.extraOption1;
    cart.sneakerConfig.colorOptions.extraOption2 = req.body.sneakerConfig.colorOptions.extraOption2;
    cart.sneakerConfig.materialOptions.laces = req.body.sneakerConfig.materialOptions.laces;
    cart.sneakerConfig.materialOptions.sole = req.body.sneakerConfig.materialOptions.sole;
    cart.sneakerConfig.materialOptions.upper = req.body.sneakerConfig.materialOptions.upper;
    cart.sneakerConfig.charms = req.body.sneakerConfig.charms;
    cart.sneakerConfig.patterns = req.body.sneakerConfig.patterns;
    cart.sneakerConfig.customText = req.body.sneakerConfig.customText;

    // Save order
    const savedCart = await cart.save();

    // Send response
    res.json({
      status: "success",
      message: "CREATING cart",
      data: {
        cart: savedCart
      }
    });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
}

const destroy = async (req, res) => {
  try {
    const cart = await Cart.findByIdAndDelete(req.params.id);

    if (!cart) {
      res.status(404).json({ status: "error", message: "Order not found" });
      return;
    }

    // Send response
    res.json({
      status: "success",
      message: "DELETING order",
      data: {
        cart: cart
      }
    });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
}

// Export controller
module.exports = {
  index,
  create,
  showByUser,
  destroy
}