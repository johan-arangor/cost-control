'use strict';
const { Model, DataTypes } = require('sequelize');
const { v4: uuidv4 } = require('uuid');

module.exports = (sequelize) => {
  class Tag extends Model {
    static associate(models) {
      Tag.belongsToMany(models.Expense, { through: 'expense_tags', foreignKey: 'tag_id' });
    }
  }

  Tag.init({
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
    modelName: 'Tag',
    tableName: 'tags',
    timestamps: false,
  });

  return Tag;
};