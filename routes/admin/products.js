const express = require('express');
const router = express.Router();
const productController = require('../../controllers/admin/product');

router.post('/product/add', productController.addProduct(req, res));

module.exports = router;