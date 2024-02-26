const { Router } = require("express");
const route = Router();
const    categoriesControllers = require("../controllers/categoriesControllers");
// const {validateJWT} = require ("../src/middleware/validateJwt");

route.all("/", function(res, req, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET. POST, PUT, DELETE, OPTIONS");
    next();
});

route.get("/getAllCategories", categoriesControllers.getAllCategories);
route.post("/newCategory", categoriesControllers.newCategory);
route.put("/editCategory", categoriesControllers.editCategory);
route.delete("/deleteCategory", categoriesControllers.deleteCategory);
// route.post("/getAllEntity", validateJWT, categoriesControllers.getAllCategories);
// route.post("/newEntity", validateJWT, categoriesControllers.newCategory);
// route.put("/editEntity", validateJWT, categoriesControllers.editCategory);
// route.delete("/editEntity", validateJWT, categoriesControllers.editCategory);

module.exports = route;