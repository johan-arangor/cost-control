require('dotenv').config();
const {HOST_DB, DIALECT_DB, USER_DB, PASSWORD_DB, NAME_DB, PORT_DB} = process.env;
const { Sequelize } = require('sequelize');

const sequalize = new Sequelize(NAME_DB, USER_DB, PASSWORD_DB, {
    host: HOST_DB,
    dialect: DIALECT_DB,
    port: PORT_DB
});

async function connection() {
  try {
    await sequalize.authenticate();
    console.log(`connection OK in database in port ${PORT_DB}`);
  } catch (error) {
    console.log('error connection:', error);
  }
}

connection();