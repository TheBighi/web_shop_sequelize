const sequelize = require('sequelize');

const sequelize = new sequelize('web_shop', 'root', 'qwerty', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;