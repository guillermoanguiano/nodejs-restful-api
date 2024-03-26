const Product = require('../models/product.model');

const getAllProducts = async () => {
  try {
    const allProducts = await Product.findAll();
    return allProducts;
  } catch (error) {
    console.log('Error while fetching all Products', error);
    throw new Error('Error while fetching all Products');
  }
}

const getSingleProduct = async (id) => {
  return;
}

const createNewProduct = async (data) => {
  try {
    if (Array.isArray(data)) {
      const newProducts = await Product.bulkCreate(data);
      return newProducts;
    } else {
      const newProduct = await Product.create(data);
      return newProduct;
    }
  } catch (error) {
    console.log('Error while creating a new Product', error);
    throw new Error('Error while creating a new Product');
  }
}

const updateProduct = async (id, data) => {
  return
}

const deleteProduct = async (id) => {
  return;
}

module.exports = {
  getAllProducts,
  getSingleProduct,
  createNewProduct,
  updateProduct,
  deleteProduct
}