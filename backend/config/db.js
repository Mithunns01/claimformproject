const { Sequelize } = require('sequelize');
require('dotenv').config(); // ✅ make sure this is included here too

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    logging: false, // optional: turns off SQL logs
  }
);

module.exports = { sequelize };
