const { Router } = require("express");
const route = Router();
const entitysControllers = require("../controllers/entitysControllers");
// const {validateJWT} = require ("../src/middleware/validateJwt");

route.all("/", function(res, req, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET. POST, PUT, DELETE, OPTIONS");
    next();
});

route.get("/getAllEntity", entitysControllers.getAllEntity);
route.post("/newEntity", entitysControllers.newEntity);
route.put("/editEntity", entitysControllers.editEntity);
route.delete("/deleteEntity", entitysControllers.deleteEntity);
// route.post("/getAllEntity", validateJWT, entitysControllers.getAllEntity);
// route.post("/newEntity", validateJWT, entitysControllers.newEntity);
// route.post("/editEntity", validateJWT, entitysControllers.editEntity);
// route.post("/deleteEntity", validateJWT, entitysControllers.deleteEntity);

module.exports = route;