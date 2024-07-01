console.log('data', 'data de mi connection');


const { Sequelize } = require('sequelize');

const sequalize = new Sequelize('costcontrol', 'root', '', {
    // host: process.env.HOST_DB,
    // dialect: process.env.DIALECT_DB,
    // port: process.env.PORT_DB
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});

async function connection() {
  try {
    await sequalize.authenticate();
    console.log('connection OK');
  } catch (error) {
    console.log('error connection:', error);
  }
}

connection();