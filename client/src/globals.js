const global = {};

global.url='http://localhost:9000';
let token = localStorage.getItem('token');

global.token = token;

module.exports = global;