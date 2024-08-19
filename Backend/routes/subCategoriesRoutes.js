const { Router } = require("express");
const route = Router();
const subCategoriesControllers = require("../controllers/subCategoriesControllers");
// const {validateJWT} = require ("../src/middleware/validateJwt");

route.all("/", function(res, req, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET. POST, PUT, DELETE, OPTIONS");
    next();
});

route.get("/getAllSubCategories/:id", subCategoriesControllers.getAllSubCategories);
route.post("/newSubCategory", subCategoriesControllers.newSubCategory);
route.put("/editSubCategory", subCategoriesControllers.editSubCategory);
route.delete("/deleteSubCategory", subCategoriesControllers.deleteSubCategory);
// route.post("/getAllSubCategories", validateJWT, subCategoriesControllers.getAllSubCategories);
// route.post("/newSubCategory", validateJWT, subCategoriesControllers.newSubCategory);
// route.put("/editSubCategory", validateJWT, subCategoriesControllers.editSubCategory);
// route.delete("/deleteSubCategory", validateJWT, subCategoriesControllers.deleteSubCategory);

module.exports = route;