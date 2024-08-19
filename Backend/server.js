const express = require('express');
const app = express();
const cors = require("cors");
const dataBase = require('./src/database/models');
const bodyParser = require("body-parser");
require('dotenv').config();

const PORT = process.env.PORT || 9000;

//Config Apis
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Cors
app.use(cors({origin:true}))

//routers
app.use(`/api/${VERSION_API}/entitys`, require("./routes/entitysRoutes"));
app.use(`/api/${VERSION_API}/categories`, require("./routes/categoriesRoutes"));
app.use(`/api/${VERSION_API}/subCategories`, require("./routes/subCategoriesRoutes"));
app.use(`/api/${VERSION_API}/users`, require("./routes/validateUser"));

//Migrate Database
dataBase.sequelize.sync()
    .then(() => {
        app.listen(9000, () => {
            console.log(`server running on http://localhots: ${PORT}` );
        });
    })
    .catch((error) => {
        console.log('Error creating database:', error);
    });

//comandos squelize
//Iniciar sequelize
//npx sequelize-cli init
//Crear migraciones
//npx sequelize-cli migration:generate --name migration_name
//Ejecutar migraciones
//npx sequelize-cli db:migrate
//Crear un seed
//npx sequelize-cli seed:generate --name seed_name
//ejecutar los seeds
//npx sequelize-cli db:seed:all