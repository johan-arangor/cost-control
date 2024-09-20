'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const sequelize = require('../../middleware/connection');
const db = {};

// Verifica la conexión a la base de datos
sequelize.authenticate()
    .then(() => {
    console.log('Conexión a la base de datos establecida con éxito.');
    })
    .catch(error => {
    console.error('No se pudo conectar a la base de datos:', error);
    });

// Lee los archivos de modelos y los importa
fs.readdirSync(__dirname)
    .filter(file => {
        return (file.indexOf('.') != 0) && (file !== basename) && (file.slice(-3) == '.js'); //Busca los modelos
    })
    .forEach(file => {
        const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
        db[model.name] = model;
    });

// Configura asociaciones entre modelos si es necesario
Object
    .keys(db).forEach(modelName => {
        if (db[modelName].associate) {
            db[modelName].associate(db);
        }
    });

// Exporta la instancia de Sequelize y los modelos
db.sequelize = sequelize;
db.Sequelize = Sequelize;

//Actualizacion de las tablas cuando hay cambios
sequelize.sync();

module.exports = db;