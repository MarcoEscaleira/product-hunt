const express = require("express");
const routes = express.Router();

const ProducController = require("./controllers/ProductControler");

routes.get("/products", ProducController.index);
routes.get("/products/:id", ProducController.show);
routes.post("/products", ProducController.store);
routes.put("/products/:id", ProducController.update);
routes.delete("/products/:id", ProducController.destroy);

module.exports = routes; 