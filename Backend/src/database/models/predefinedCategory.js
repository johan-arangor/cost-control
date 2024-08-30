'use strict';
const { Model, DataTypes } = require('sequelize');
const { v4: uuidv4 } = require('uuid');

module.exports = (sequelize) => {
  class PredefinedCategory extends Model {
    static associate(models) {
      PredefinedCategory.hasMany(models.Expense, { foreignKey: 'category_id' });
    }
  }

  PredefinedCategory.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: uuidv4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'PredefinedCategory',
    tableName: 'predefined_categories',
    timestamps: false,
  });

  return PredefinedCategory;
};