const express = require("express");
const ProductManager = require("../dao/db/productsMongodb.js");
const { deleteModel } = require("mongoose");
const productManager = new ProductManager();
// express router
const router = express.Router();
router.get("/", async (req, res) => {
  try {
    let prods = await productManager.getProducts();
    console.log(prods);
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
    const product = await productManager.addProduct({
      title,
      description,
      code,
      price,
      status,
      stock,
      category,
      thumbnail,
    });
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
    const productId = req.params.pid;
    const deletedProduct = await productManager.deleteProduct(productId);
    if (deletedProduct) {
      res.status(200).json({ success: "Producto eliminado correctamente" });
    } else {
      // Si no se encontró el producto, devolver un código 404
      res.status(404).json({ message: "Producto no encontrado" });
    }
  } catch (error) {
    res.status(500).json({
      message: "Ha ocurrido un error al eliminar el producto",
      error: error.message,
    });
  }
});

module.exports = router;
