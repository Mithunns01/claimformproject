const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Form = sequelize.define('Form', {
  fullName: DataTypes.STRING,
  email: DataTypes.STRING,
  phone: DataTypes.STRING,
  jobTitle: DataTypes.STRING,
  dateOfBirth: DataTypes.DATEONLY,
  diagnosisDate: DataTypes.DATEONLY,
  diagnosisType: DataTypes.STRING,
  story: DataTypes.TEXT,
});

module.exports = Form;
