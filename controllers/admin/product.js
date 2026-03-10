const Product = require('../../models/product');

class AdminController {
    
    async addProduct(req, res) {
        const product = await Product.create({
            title: req.body.title,
            price: req.body.price,
            imageUrl: req.body.imageUrl,
            description: req.body.description
        })
        res.status(201).json(product)
    }

}

module.exports = new AdminController()