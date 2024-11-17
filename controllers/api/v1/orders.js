// Include models
// const Order = require('../../../models/api/v1/Order');

// Define controllers
const index = async (req, res) => {
  try {
    // Get all orders
    // const orders = await Order.find();

    // Send response
    res.json({
      status: "success",
      message: "GETTING orders",
      data: {
        id: 1,
        userId: 1,
        sneakerConfig: {
          sneakerModelId: 1,
          shoeSize: 2,
          colorOptions: {
            laces: "black",
            sole: "black",
            upper: "white",
            extraOption1: "yellow",
            extraOption2: "red"
          },
          materialOptions: {
            laces: "cotton",
            sole: "rubber",
            upper: "leather"
          },
          charms: ["skateboard", "sticker"],
          patterns: "stripe",
          customText: "custom text"
        },
        status: "pending",
        contactDetails: {
          firstname: "John",
          lastname: "Doe",
          email: "j@j.com",
          phone: "1234567890",
          address: {
            street: "123 Main St",
            city: "Anytown",
            postalCode: "1020",
            country: "Belgium"
          }
        },
        orderDate: "2021-01-01",
        lastUpdated: "2021-01-01"
      }
    });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
}

const create = async (req, res) => {
  try {
    // Create order
    const {text, user} = req.body;

    // Save order
    // const savedOrder = await order.save();

    // Send response
    res.json({
      status: "success",
      message: "CREATING order",
      data: {
        text,
        user
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