const express = require("express");
const usersManager = require("../Manager/usersMongodb");
const manager = new usersManager();

const router = express.Router();
router.get("/", async (req, res) => {
  try {
    let prods = await manager.getUser();
    res.send(prods);
  } catch (error) {
    res.json({ error: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      throw new Error("Email is required");
    }
    const product = await manager.createUser(req.body);
    res.send(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
