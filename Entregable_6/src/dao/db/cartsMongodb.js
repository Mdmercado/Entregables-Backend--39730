const { cartModel } = require("../models/cart.model");
class cartManager {
  async createCart() {
    try {
      const cart = await cartModel.create({ products: [] });
      return cart;
    } catch (error) {
      throw error;
    }
  }
  async getCartById(id) {
    try {
      const found = await cartModel.findById(id);
      return found;
    } catch (error) {
      throw error;
    }
  }
  async addProductToCart(cid, pid) {
    try {
      const selectedCart = await cartModel.findById(cid);
      if (!selectedCart) {
        throw new Error(`Cart ID: ${cid} no existe`);
      } else {
        const selectedProduct = selectedCart.products.find((product) =>
          product.product.equals(pid)
        );
        if (!selectedProduct) {
          selectedCart.products.push({ product: pid, quantity: 1 });
        } else {
          selectedProduct.quantity++;
        }
        const updatedCart = await selectedCart.save();
        return updatedCart;
      }
    } catch (error) {
      throw error;
    }
  }
}
module.exports = cartManager;
