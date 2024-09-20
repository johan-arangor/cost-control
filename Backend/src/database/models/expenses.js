'use strict';
const { Model, DataTypes } = require('sequelize');
const { v4: uuidv4 } = require('uuid');

module.exports = (sequelize) => {
  class Expense extends Model {
    static associate(models) {
      Expense.belongsTo(models.User, { foreignKey: 'user_id' });
      Expense.belongsTo(models.Vehicle, { foreignKey: 'vehicle_id' });
      Expense.belongsTo(models.PredefinedCategory, { foreignKey: 'category_id' });
      Expense.belongsTo(models.UserCategory, { foreignKey: 'user_category_id' });
      Expense.belongsToMany(models.Tag, { through: 'expense_tags', foreignKey: 'expense_id' });
    }
  }

  Expense.init({
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
    vehicle_id: {
      type: DataTypes.UUID,
      references: {
        model: 'vehicles',
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
        min: 1, // Check amount greater than or equal to 1
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
    modelName: 'Expense',
    tableName: 'expenses',
    timestamps: false,
  });

  return Expense;
};