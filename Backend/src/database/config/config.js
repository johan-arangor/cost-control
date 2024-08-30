require('dotenv').config();
const {HOST_DB, DIALECT_DB, USER_DB, PASSWORD_DB } = process.env;

module.exports = {
    "development": {
        "username": USER_DB,
        "password": PASSWORD_DB,
        "database": "costcontrol_development",
        "host": HOST_DB,
        "dialect": DIALECT_DB
    },
    "test": {
        "username": USER_DB,
        "password": PASSWORD_DB,
        "database": "costcontrol_test",
        "host": HOST_DB,
        "dialect": DIALECT_DB
    },
    "production": {
        "username": USER_DB,
        "password": PASSWORD_DB,
        "database": "costcontrol_production",
        "host": HOST_DB,
        "dialect": DIALECT_DB
    },
}