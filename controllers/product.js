const Product = require('../../models/product');

class productController {
    async getAllProducts(req, res) {
        const products = await Product.findAll()
        res.status(200).json(products)
    }
}

module.exports = new productController()