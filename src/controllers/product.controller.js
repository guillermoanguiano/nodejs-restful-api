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
  const singleProduct = await productService.getSingleProduct(req.params.id);
  res.send({ message: `Get a single Product with id ${req.params.id}` });
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
  const updatedProduct = await productService.updateProduct(req.params.id, req.body);
  res.send({ message: `Update a Product with id ${req.params.id}` });
}

const deleteProduct = async (req, res) => {
  const deletedProduct = await productService.deleteProduct(req.params.id);
  res.send({ message: `Delete a Product with id ${req.params.id}` });
}

module.exports = {
  getAllProducts,
  getSingleProduct,
  createProduct,
  updateProduct,
  deleteProduct
}