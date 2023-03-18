const fs = require("fs");

class ProductManager {
  constructor() {
    this.path = "./productos.json";
    this.products = [];
  }
  addProduct(title, description, price, thumbnail, code, stock) {
    let product = {
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
    };
    // validate required fields
    let values = Object.values(product);
    if (
      values.some((item) => item == undefined || item == null || item == "")
    ) {
      console.error("Todos los campos son requeridos");
    } else {
      if (this.products.length == 0) {
        product.id = 1;
      } else {
        product.id = this.products[this.products.length - 1].id + 1;
      }

      this.products.push(product);
      fs.writeFileSync(this.path, JSON.stringify(this.products), "utf-8");
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

  updateProduct(id, field) {
    let products = JSON.parse(fs.readFileSync(this.path, "utf-8"));
    let findProduct = products.find((item) => item.id == id);

    if (findProduct) {
      let updatedProducts = products.map((product) => {
        if (product.id === id) {
          return { ...product, ...field };
        } else {
          return product;
        }
      });
      fs.writeFileSync(this.path, JSON.stringify(updatedProducts), "utf-8");
      console.log(`Producto ${id} Actualizado`);
    } else {
      return `Error: producto ${id} no existe`;
    }
  }

  deleteProduct(id) {
    let products = JSON.parse(fs.readFileSync(this.path, "utf-8"));
    let findProduct = products.find((item) => item.id == id);
    if (findProduct) {
      let filtredProducts = products.filter((item) => item.id != id);

      fs.writeFileSync(this.path, JSON.stringify(filtredProducts), "utf-8");
      console.log(`Producto ${id} eliminado`);
    } else {
      console.log(`Error: producto ${id} no existe para borrar`);
    }
  }

  async getProducts() {
    return JSON.parse(await fs.promises.readFile(this.path, "utf-8"));
  }
}

module.exports = ProductManager;
