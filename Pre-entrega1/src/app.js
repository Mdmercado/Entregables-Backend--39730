const express = require("express");
const app = express();
const productRoute = require("./routes/products.routes.js");
const cartRoute = require("./routes/carts.routes.js");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const PORT = 8080;

app.get("/", (req, res) => res.json({ msg: "welcome Pre Entrega" }));

app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);

app.listen(PORT, () =>
  console.log(`Server corriendo en http://localhost:${PORT}`)
);
