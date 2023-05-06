const express = require("express");
const { Server } = require("socket.io");
const handlebars = require("express-handlebars");
const productRoute = require("./routes/products.routes.js");
const cartRoute = require("./routes/carts.routes.js");
// const viewsRoute = require("./routes/views.routes.js");
// const ProductManager = require("./Manager/productManager.js");
const { objConfig } = require("./config/config.js");
// const Pmanager = new ProductManager();

objConfig.connectDB();
// express config
const app = express();
const PORT = 8080;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// handlebars config
app.engine("handlebars", handlebars.engine());
app.set("views", __dirname + "/views");
app.set("view engine", "handlebars");

app.use(express.static(`${__dirname}/public`));

app.get("/", (req, res) => res.json({ msg: "welcome pre-entrega 2" }));
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
// app.use("/api/users", userRoute);
// app.use("/views", viewsRoute);

const httpServer = app.listen(PORT, () =>
  console.log(`Server corriendo en http://localhost:${PORT}`)
);

const socketServer = new Server(httpServer);

// on event socket
// socketServer.on("connection", (socket) => {
//   console.log("nuevo cliente conectado");

//   socket.on("products", async () => {
//     try {
//       const products = await Pmanager.getProducts();
//       socket.emit("products", products);
//     } catch (error) {
//       console.log(error);
//     }
//   });

//   socket.on("addProduct", async (product) => {
//     try {
//       const products = await Pmanager.addProduct(product);
//       socket.emit("products", products);
//     } catch (error) {
//       console.log(error);
//     }
//   });

//   socket.on("deleteProduct", async (id) => {
//     try {
//       const products = await Pmanager.deleteProduct(id);
//       socket.emit("products", products);
//     } catch (error) {
//       console.log(error);
//     }
//   });
// });
