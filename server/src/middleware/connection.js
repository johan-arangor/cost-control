const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  database: 'controlcost',
  user: 'root',
  password: ''
});

module.exports = connection;