const fs = require('fs');
const path = require('path');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config.js')[env];
const Sequelize = require('sequelize');
const { Sequelize, DataTypes } = require('sequelize');

//Inyectando los datos de conexión
const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    {
      host: config.host,
      port: config.port,
      dialect: config.dialect,
    }
  );

// Definir los modelos
const PredefinedCategory = sequelize.define('PredefinedCategory', {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, { tableName: 'predefined_categories' });

const Tag = sequelize.define('Tag', {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  user_id: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  predefined_category_id: {
    type: DataTypes.STRING,
    references: {
      model: PredefinedCategory,
      key: 'id',
    },
    allowNull: true,
  },
  user_category_id: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, { tableName: 'tags' });

module.exports = {
  up: async () => {
    // Leer el archivo JSON
    const data = JSON.parse(fs.readFileSync(path.join(__dirname, '../predefined_data.json'), 'utf8'));

    // Sincronizar modelos con la base de datos
    await sequelize.sync();

    // Insertar las categorías predefinidas
    await PredefinedCategory.bulkCreate(data.predefined_categories, {
      updateOnDuplicate: ['name'],
    });

    // Insertar las etiquetas
    await Tag.bulkCreate(data.tags, {
      updateOnDuplicate: ['name', 'predefined_category_id', 'user_category_id'],
    });
  },

};
