const express = require('express');
const router = express.Router();
const productController = require('../../controllers/admin/product');

router.get('/products', productController.getAllProducts(req, res));

module.exports = router;