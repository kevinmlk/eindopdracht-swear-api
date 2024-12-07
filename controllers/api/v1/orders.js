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

const show = async (req, res) => {
  try {
    // Get order
    const order = await Order.findById(req.params.id);

    // Send response
    res.json({
      status: "success",
      message: "GETTING order",
      data: {
        order: order
      }
    });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
      }
}

const create = async (req, res) => {
  try {
    // Create order
    const order = new Order();

    // Set order data
    order.userId = req.body.userId;
    order.sneakerConfig.shoeSize = req.body.sneakerConfig.shoeSize;
    order.sneakerConfig.colorOptions.laces = req.body.sneakerConfig.colorOptions.laces;
    order.sneakerConfig.colorOptions.sole = req.body.sneakerConfig.colorOptions.sole;
    order.sneakerConfig.colorOptions.upper = req.body.sneakerConfig.colorOptions.upper;
    order.sneakerConfig.colorOptions.extraOption1 = req.body.sneakerConfig.colorOptions.extraOption1;
    order.sneakerConfig.colorOptions.extraOption2 = req.body.sneakerConfig.colorOptions.extraOption2;
    order.sneakerConfig.materialOptions.laces = req.body.sneakerConfig.materialOptions.laces;
    order.sneakerConfig.materialOptions.sole = req.body.sneakerConfig.materialOptions.sole;
    order.sneakerConfig.materialOptions.upper = req.body.sneakerConfig.materialOptions.upper;
    order.sneakerConfig.charms = req.body.sneakerConfig.charms;
    order.sneakerConfig.patterns = req.body.sneakerConfig.patterns;
    order.sneakerConfig.customText = req.body.sneakerConfig.customText;
    order.status = req.body.status;
    order.contactDetails.firstname = req.body.contactDetails.firstname;
    order.contactDetails.lastname = req.body.contactDetails.lastname;
    order.contactDetails.email = req.body.contactDetails.email;
    order.contactDetails.phone = req.body.contactDetails.phone;
    order.contactDetails.address.street = req.body.contactDetails.address.street;
    order.contactDetails.address.city = req.body.contactDetails.address.city;
    order.contactDetails.address.postalCode = req.body.contactDetails.address.postalCode;
    order.contactDetails.address.country = req.body.contactDetails.address.country;

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

const update = async (req, res) => {
  try {
    // Get order
    const order = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true });

    if (!order) {
      res.status(404).json({ status: "error", message: "Order not found" });
      return;
    }

    // Set order data
    order.sneakerConfig.shoeSize = req.body.sneakerConfig.shoeSize;
    order.sneakerConfig.colorOptions.laces = req.body.sneakerConfig.colorOptions.laces;
    order.sneakerConfig.colorOptions.sole = req.body.sneakerConfig.colorOptions.sole;
    order.sneakerConfig.colorOptions.upper = req.body.sneakerConfig.colorOptions.upper;
    order.sneakerConfig.colorOptions.extraOption1 = req.body.sneakerConfig.colorOptions.extraOption1;
    order.sneakerConfig.colorOptions.extraOption2 = req.body.sneakerConfig.colorOptions.extraOption2;
    order.sneakerConfig.materialOptions.laces = req.body.sneakerConfig.materialOptions.laces;
    order.sneakerConfig.materialOptions.sole = req.body.sneakerConfig.materialOptions.sole;
    order.sneakerConfig.materialOptions.upper = req.body.sneakerConfig.materialOptions.upper;
    order.sneakerConfig.charms = req.body.sneakerConfig.charms;
    order.sneakerConfig.patterns = req.body.sneakerConfig.patterns;
    order.sneakerConfig.customText = req.body.sneakerConfig.customText;
    order.status = req.body.status;
    order.contactDetails.firstname = req.body.contactDetails.firstname;
    order.contactDetails.lastname = req.body.contactDetails.lastname;
    order.contactDetails.email = req.body.contactDetails.email;
    order.contactDetails.phone = req.body.contactDetails.phone;
    order.contactDetails.address.street = req.body.contactDetails.address.street;
    order.contactDetails.address.city = req.body.contactDetails.address.city;
    order.contactDetails.address.postalCode = req.body.contactDetails.address.postalCode;
    order.contactDetails.address.country = req.body.contactDetails.address.country;

    // Send response
    res.json({
      status: "success",
      message: "UPDATING order",
      data: {
        order: order
      }
    });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
}

const destroy = async (req, res) => {
  try {
    const order = await Order.findByIdAndDelete(req.params.id);

    if (!order) {
      res.status(404).json({ status: "error", message: "Order not found" });
      return;
    }

    // Send response
    res.json({
      status: "success",
      message: "DELETING order",
      data: {
        order: order
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
  show,
  update,
  destroy
}