const { sequelize } = require("./db");
const Product = require("../models/product.model")

const connectToDb = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log("Successfully connected to our db 😎");
  } catch (error) {
    console.error('Unable to connect to the database: \n', error);
  }
};

module.exports = {
  connectToDb
}