const productService = require('../services/product.service');

const getAllProducts = async (req, res) => {
  try {
    const allProducts = await productService.getAllProducts();

    if(allProducts.length === 0) {
      res.status(404).send({ message: 'No products found' });
    }

    res.send(allProducts);
  } catch (error) {
    res.status(500).send({ message: 'Error while fetching all Products' });
  }
}

const getSingleProduct = async (req, res) => {
  try {
    if(!req.params.productId) {
      console.log(req.params);
      res.status(400).send({ message: 'Product id is required' });
      return;
    }
    const singleProduct = await productService.getSingleProduct(req.params.productId);

    if(!singleProduct) {
      res.status(404).send({ message: 'Product not found' });
      return;
    }

    res.send(singleProduct);
  } catch (error) {
    res.status(500).send({ message: 'Error while fetching a single Product' });
  }
}

const createProduct = async (req, res) => {
  try {
    if (!req.body) {
      res.status(400).send({ message: 'Content can not be empty!' });
      return;
    }
    await productService.createNewProduct(req.body);
    res.send({ message: 'New Product created successfully!', data: req.body });
  } catch (error) {
    res.status(500).send({ message: 'Error creating new product' });
  }
}

const updateProduct = async (req, res) => {
  try {
    if(!req.body) {
      res.status(400).send({ message: 'Content can not be empty!' });
      return;
    }
    await productService.updateProduct(req.params.productId, req.body);
    res.send({ message: 'Product updated successfully!', data: req.body });
  } catch (error) {
    res.status(500).send({ message: 'Error while updating a Product' });
  }
}

const deleteProduct = async (req, res) => {
  try {
    if(!req.params.productId) {
      res.status(400).send({ message: 'Product id is required' });
      return;
    }
    await productService.deleteProduct(req.params.productId);
    res.send({ message: 'Product deleted successfully!', dataDeleted: req.body });
  } catch (error) {
    res.status(500).send({ message: 'Error while deleting a Product' });
  }
}

module.exports = {
  getAllProducts,
  getSingleProduct,
  createProduct,
  updateProduct,
  deleteProduct
}