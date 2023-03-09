const fs = require("fs");

class ProductManager {
  constructor(path) {
    this.path = path;
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

  getProductById(id) {
    let product = JSON.parse(fs.readFileSync(this.path, "utf-8")).find(
      (item) => item.id == id
    );
    if (product) {
      return product;
    } else {
      return `Error: producto ${id} no existe`;
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

  getProducts() {
    return JSON.parse(fs.readFileSync(this.path, "utf-8"));
  }
}

const instancia = new ProductManager("./products.json");
instancia.addProduct(
  "Producto1",
  "Mate Stanley",
  7000,
  "sin imagen",
  "abc123",
  25
);
instancia.addProduct(
  "Producto2",
  "Bombilla alpaca",
  4000,
  "sin imagen",
  "abc124",
  10
);
instancia.addProduct("Producto3", "Tapamate", 2500, "sin imagen", "tpm", 25);

console.log("TODOS LOS PRODUCTOS --> ", instancia.getProducts());
console.log("PRODUCTO POR ID --> ", instancia.getProductById(1));
console.log("PRODUCTO POR ID --> ", instancia.getProductById(12));

instancia.updateProduct(2, { code: "mmk123" });

instancia.deleteProduct(3);
instancia.deleteProduct(5);
