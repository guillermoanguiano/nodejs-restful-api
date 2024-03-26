const express = require('express');
const { getAllProducts, 
  getSingleProduct, 
  createProduct, 
  updateProduct, 
  deleteProduct 
} = require('../../controllers/product.controller');
const router = express.Router();


router
  .get('/', getAllProducts)

  .get('/:productId', getSingleProduct)

  .post('/', createProduct)

  .put('/:productId', updateProduct)

  .delete('/:productId', deleteProduct);

module.exports = router;