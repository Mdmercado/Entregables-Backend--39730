const fs = require("fs");

class ProductManager {
  constructor() {
    this.path = "./src/Manager/products.json";
    this.products = [];
  }
  async addProduct(
    // title,
    // description,
    // price,
    // status = true,
    // thumbnail,
    // code,
    // stock
    product
  ) {
    let required_product = {
      title: product.title,
      description: product.description,
      price: product.price,
      status: product.status,
      code: product.code,
      stock: product.stock,
    };

    let values = Object.values(required_product);
    if (
      values.some((item) => item == undefined || item == null || item == "")
    ) {
      throw new Error("Faltan campos requeridos");
    } else {
      required_product["thumbnail"] = product.thumbnail || null;
      this.products = JSON.parse(
        await fs.promises.readFile(this.path, "utf-8")
      );
      if (this.products.length == 0) {
        product.id = 1;
      } else {
        product.id = this.products[this.products.length - 1].id + 1;
      }
      this.products.push(product);
      await fs.promises.writeFile(
        this.path,
        JSON.stringify(this.products),
        "utf-8"
      );
      return product;
    }
  }

  async getProductById(id) {
    let product = JSON.parse(
      await fs.promises.readFile(this.path, "utf-8")
    ).find((item) => item.id == id);
    if (product) {
      return product;
    } else {
      return { error: "Producto inexistente con ese ID" };
    }
  }

  async updateProduct(id, fields) {
    let products = JSON.parse(fs.readFileSync(this.path, "utf-8"));
    let findProduct = products.find((item) => item.id == id);
    let productIndex = products.findIndex((item) => item.id == id);
    if (findProduct) {
      let updatedProduct = { ...findProduct, ...fields };
      products[productIndex] = updatedProduct;

      await fs.promises.writeFile(this.path, JSON.stringify(products), "utf-8");
      return updatedProduct;
    } else {
      throw new Error(`producto ${id} no existe`);
    }
  }

  async deleteProduct(id) {
    let products = JSON.parse(fs.readFileSync(this.path, "utf-8"));
    let findProduct = products.find((item) => item.id == id);
    if (findProduct) {
      let filtredProducts = products.filter((item) => item.id != id);

      await fs.promises.writeFile(
        this.path,
        JSON.stringify(filtredProducts),
        "utf-8"
      );
      return filtredProducts;
    } else {
      throw new Error(`producto ${id} no existe para borrar`);
    }
  }

  async getProducts() {
    return JSON.parse(await fs.promises.readFile(this.path, "utf-8"));
  }
}

module.exports = ProductManager;
