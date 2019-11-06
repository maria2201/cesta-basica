const {Router} = require("express");
const routes = Router();
const UserController = require("./controllers/UserController");
routes.post("/user",UserController.store);
routes.get("/user",UserController.list);
routes.get("/user/:email",UserController.index);
routes.put("/user/:id",UserController.update);
routes.delete("/user/:id",UserController.destroy);

module.exports = routes;