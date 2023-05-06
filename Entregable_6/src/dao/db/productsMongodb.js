const { productModel } = require("../models/product.model");

class ProductManager {
  async getProducts() {
    return await productModel.find();
  }
  async getProductById(pid) {
    try {
      const product = await productModel.findById(pid);
      if (!product) {
        throw new Error("Producto no encontrado");
      }
      return product;
    } catch (error) {
      throw error;
    }
  }
  async addProduct(product) {
    try {
      const create = await productModel.create(product);
      return create;
    } catch (error) {
      throw error;
    }
  }
  async updateProduct(id, product) {
    try {
      const update = await productModel.findByIdAndUpdate(id, product, {
        new: true,
      });
      return update;
    } catch (error) {
      throw error;
    }
  }
  async deleteProduct(id) {
    try {
      const deleteProd = await productModel.findByIdAndDelete(id);
      return deleteProd;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ProductManager;
