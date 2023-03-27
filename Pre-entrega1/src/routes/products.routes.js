const express = require("express");
const ProductManager = require("../Manager/productManager");
const productManager = new ProductManager();
// express router
const router = express.Router();
router.get("/", async (req, res) => {
  try {
    let prods = await productManager.getProducts();
    if (req.query.limit) {
      let limiteds = prods.slice(0, req.query.limit);
      res.send(limiteds);
    } else {
      res.send(prods);
    }
  } catch (error) {
    res.json({ error: error.message });
  }
});
router.get("/:pid", async (req, res) => {
  let pid = req.params.pid;
  try {
    let product = await productManager.getProductById(pid);
    res.json(product);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const {
      title,
      description,
      code,
      price,
      status,
      stock,
      category,
      thumbnail,
    } = req.body;
    const product = await productManager.addProduct(
      title,
      description,
      code,
      price,
      status,
      stock,
      category,
      thumbnail
    );
    res.send(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.put("/:pid", async (req, res) => {
  try {
    let productId = req.params.pid;
    let result = await productManager.updateProduct(productId, req.body);
    res.status(201).json(result);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

router.delete("/:pid", async (req, res) => {
  try {
    let productId = req.params.pid;
    let result = await productManager.deleteProduct(productId);
    res.json({ success: result });
  } catch (error) {
    res.json({ error: error.message });
  }
});

module.exports = router;
