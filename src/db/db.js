const { Sequelize } = require('sequelize');
const { DB_USERNAME, DB_PASSWORD } = require('../config');

const sequelize = new Sequelize('pruebas-memo', DB_USERNAME, DB_PASSWORD, {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = { sequelize };