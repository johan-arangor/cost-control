const express = require('express');
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
require('dotenv').config();

//Config Apis
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Cors
app.use(cors({origin:true}))

//routers
app.use("/entitys", require("./routes/entitysRoutes"));
app.use("/categories", require("./routes/categoriesRoutes"));
app.use("/subCategories", require("./routes/subCategoriesRoutes"));
app.use("/users", require("./routes/validateUser"));

app.listen(9000, () => {
    console.log('server running on', 'http://localhots:' + 9000 );
});