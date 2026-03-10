const express = require('express');
const router = express.Router();
const productController = require('../../controllers/admin/product');

router.get('/products', productController.getAllProducts(req, res));
router.get('/products/:id', productController.getProductById(req, res));

module.exports = router;