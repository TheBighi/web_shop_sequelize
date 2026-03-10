const express = require('express');
const router = express.Router();
const productController = require('../../controllers/admin/product');

router.post('/product/add', productController.addProduct(req, res));
router.post('/products', productController.getAllProducts(req, res));
router.get('/products/:id', productController.getProductById(req, res));
router.put('/products/:id', productController.updateProduct(req, res));
router.delete('/products/:id', productController.deleteProduct(req, res));

module.exports = router;