class TicketManager {
  constructor() {
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
      if (this.products.includes(code)) {
        console.log("Un producto con ese id ya fue registrado");
      } else {
        if (this.products.length == 0) {
          product.id = 1;
        } else {
          product.id = this.products[this.products.length - 1].id + 1;
        }

        this.products.push(product);
      }
    }
  }

  getProductById(id) {
    let product = this.products.find((item) => item.id == id);
    if (product) {
      return product;
    } else {
      return "producto no existe";
    }
  }
  getProducts() {
    return this.products;
  }
}

let instancia = new TicketManager();

console.log("Productos -> ", instancia.getProducts());

instancia.addProduct(
  (title = "Ticket de Prueba"),
  (description = "Descripción del ticket"),
  (price = "$10.00"),
  (thumbnail =
    "http://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"),
  (code = "1234567890"),
  (stock = 10)
);
instancia.addProduct(
  (title = "Ticket de Prueba 2"),
  (description = "Descripción del ticket 2"),
  (price = "$10.00"),
  (thumbnail =
    "http://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"),
  (code = "12345678910"),
  (stock = 11)
);

console.log("Productos -> ", instancia.getProducts());
console.log("producto id 2 -> ", instancia.getProductById(2));
console.log("producto id 5 -> ", instancia.getProductById(5));
