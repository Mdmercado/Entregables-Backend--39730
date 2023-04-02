const express = require("express");
const ProductManager = require("../Manager/productManager");
const router = express.Router();

const Manager = new ProductManager();

router.get("/", async (req, res) => {
  res.render("index", {});
});

router.get("/home", async (req, res) => {
  const products = await Manager.getProducts();
  res.render("home", {
    title: "productos",
    products: products,
  });
});

router.get("/realtimeproducts", (req, res) => {
  res.render("realTimeProducts", {
    title: "RealTime-Prods",
  });
});

module.exports = router;
