'use strict'

const sequelize = require('sequelize');
const { Model, DataTypes } = require('sequelize');
const { v4: uuidv4 } = require('uuid');

module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        static associate(models) {
            User.hasMany(models.Vehicle, { foreignKey: 'user_id' });
            User.hasMany(models.Expense, { foreignKey: 'user_id' });
            User.hasMany(models.Tag, { foreignKey: 'user_id' });
            User.hasMany(models.UserCategory, { foreignKey: 'user_id' });
          }
    }

    User.init({
        id: {
            type: DataTypes.UUID,
            defaultValue: uuidv4,
            primaryKey: true,
        },
        names: {
            type: DataTypes.STRING,
            allownull: false
        },
        lastNames: {
            type: DataTypes.STRING,
            allownull: false
        },
        email: {
            type: DataTypes.STRING,
            allownull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        }
    }, {
        sequelize,
        modelName: 'User',
        tableName: 'Users',
        timestamps: true,
    });

    return User;
};