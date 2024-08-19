'use strict';
const { Model, DataTypes } = require('sequelize');
const { v4: uuidv4 } = require('uuid');

module.exports = (sequelize) => {
  class Income extends Model {
    static associate(models) {
      Income.belongsTo(models.User, { foreignKey: 'user_id' });
      Income.belongsTo(models.PredefinedCategory, { foreignKey: 'category_id' });
      Income.belongsTo(models.UserCategory, { foreignKey: 'user_category_id' });
      Income.belongsToMany(models.Tag, { through: 'income_tags', foreignKey: 'income_id' });
    }
  }

  Income.init({
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
    category_id: {
      type: DataTypes.UUID,
      references: {
        model: 'predefined_categories',
        key: 'id',
      },
      allowNull: true,
    },
    user_category_id: {
      type: DataTypes.UUID,
      references: {
        model: 'user_categories',
        key: 'id',
      },
      allowNull: true,
    },
    amount: {
      type: DataTypes.NUMERIC(10, 2),
      allowNull: false,
      validate: {
        min: -1, // Check amount greater than or equal to -1
      },
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    }
  }, {
    sequelize,
    modelName: 'Income',
    tableName: 'incomes',
    timestamps: false,
  });

  return Income;
};