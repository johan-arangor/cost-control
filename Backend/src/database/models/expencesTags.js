'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class ExpenseTag extends Model {}

  ExpenseTag.init({
    expense_id: {
      type: DataTypes.UUID,
      references: {
        model: 'expenses',
        key: 'id',
      },
      primaryKey: true,
    },
    tag_id: {
      type: DataTypes.UUID,
      references: {
        model: 'tags',
        key: 'id',
      },
      primaryKey: true,
    }
  }, {
    sequelize,
    modelName: 'ExpenseTag',
    tableName: 'expense_tags',
    timestamps: false,
  });

  return ExpenseTag;
};