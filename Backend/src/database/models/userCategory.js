'use strict';
const { Model, DataTypes } = require('sequelize');
const { v4: uuidv4 } = require('uuid');

module.exports = (sequelize) => {
  class UserCategory extends Model {
    static associate(models) {
      UserCategory.hasMany(models.Expense, { foreignKey: 'user_category_id' });
    }
  }

  UserCategory.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: uuidv4,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.UUID,
      references: {
        model: 'users',
        key: 'id',
      },
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'UserCategory',
    tableName: 'user_categories',
    timestamps: false,
  });

  return UserCategory;
};