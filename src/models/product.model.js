const { DataTypes, Model } = require('sequelize');
const {sequelize} = require('../db/db');

class Product extends Model {}

Product.init({
  name: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT('long'),
    allowNull: true
  }
}, {
  sequelize,
  modelName: 'Product'
});

module.exports = Product;
