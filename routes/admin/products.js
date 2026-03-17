const express = require('express');
const router = express.Router();
const productController = require('../../controllers/admin/product.js')

router.post('/product/add', productController.addProduct);
router.post('/products', productController.getAllProducts);
router.get('/products/:id', productController.getProductById);
router.put('/products/:id', productController.updateProduct);
router.delete('/products/:id', productController.deleteProduct);

module.exports = router;