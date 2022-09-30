'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Contacts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Contacts.init({
    name: DataTypes.STRING,
    phone: DataTypes.NUMBER,
    email: DataTypes.STRING,
    message: DataTypes.STRING,
    deleteAt: DataTypes.STRING,
    paranoid: true
  }, {
    sequelize,
    modelName: 'Contacts',
  });
  return Contacts;
};