const { Schema, model } = require("mongoose");
const collection = "carts";

const CartSchema = new Schema({
  products: {
    type: [
      {
        product: { type: String, required: true },
        quantity: { type: Number, required: true },
      },
    ],
    required: true,
  },
});

const cartModel = model(collection, CartSchema);

module.exports = {
  cartModel,
};
