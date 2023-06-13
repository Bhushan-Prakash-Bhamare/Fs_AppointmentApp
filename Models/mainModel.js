const Sequelize = require('sequelize');

const sequelize = require('../Util/database');

const contactData = sequelize.define('contactInfo', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    Name: Sequelize.STRING,
    PhoneNumber:{
        type: Sequelize.STRING,
        allowNull: false,
        unique:true
    },
    Email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique:true
    },
  });
  
  module.exports = contactData;