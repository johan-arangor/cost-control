'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class IncomeTag extends Model {}

  IncomeTag.init({
    income_id: {
      type: DataTypes.UUID,
      references: {
        model: 'incomes',
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
    modelName: 'IncomeTag',
    tableName: 'income_tags',
    timestamps: false,
  });

  return IncomeTag;
};