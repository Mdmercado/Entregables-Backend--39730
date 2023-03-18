const ProductManager = require("./productManager.js");
const manager = new ProductManager();
const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port = 8080;
//app get / welcome
app.get("/", (req, res) => res.json({ msg: "welcome entregable 3" }));

app.get("/products", async (req, res) => {
  try {
    let prods = await manager.getProducts();
    if (req.query.limit) {
      let limiteds = prods.slice(0, req.query.limit);
      res.send(limiteds);
    } else {
      res.send(prods);
    }
  } catch (error) {
    res.json({ error: error });
  }
});
//get product by id :pid
app.get("/products/:pid", async (req, res) => {
  let pid = req.params.pid;
  try {
    let product = await manager.getProductById(pid);
    res.json(product);
  } catch (error) {
    res.json({ error: error });
  }
});
app.listen(port, () =>
  console.log(`Server corriendo en http://localhost:${port}`)
);
