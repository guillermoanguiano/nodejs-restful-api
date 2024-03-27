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
  try {
    const singleProduct = await Product.findOne({ where: { id } });
    return singleProduct;
  } catch (error) {
    console.log('Error while fetching a single Product', error);
    throw new Error('Error while fetching a single Product');
  }
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
  try {
    const updatedProduct = await Product.update(data, { where: { id } });
    return updatedProduct;
  } catch (error) {
    console.log('Error while updating a Product', error);
    throw new Error('Error while updating a Product');
  }
}

const deleteProduct = async (id) => {
  try {
    const deletedProduct = await Product.destroy({ where: { id } });
    return deletedProduct;
  } catch (error) {
    console.log('Error while deleting a Product', error);
    throw new Error('Error while deleting a Product');
  }
}

module.exports = {
  getAllProducts,
  getSingleProduct,
  createNewProduct,
  updateProduct,
  deleteProduct
}