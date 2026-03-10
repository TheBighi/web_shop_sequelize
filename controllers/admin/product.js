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

    async getAllProducts(req, res) {
        const products = await Product.findAll()
        res.status(200).json(products)
    }

    async getProductById(req, res) {
        const product = await Product.findByPk(req.params.id)
        if (!product) {
            return res.status(404).json({ message: 'Product not found' })
        }
        res.status(200).json(product)
    }

    async updateProduct(req, res) {
        const product = await Product.findByPk(req.params.id)
        if (!product) {
            return res.status(404).json({ message: 'Product not found' })
        }
        product.title = req.body.title
        product.price = req.body.price
        product.imageUrl = req.body.imageUrl
        product.description = req.body.description
        await product.save()
        res.status(200).json(product)
    }

    async deleteProduct(req, res) {
        const product = await Product.findByPk(req.params.id)
        if (!product) {
            return res.status(404).json({ message: 'Product not found' })
        }
        await product.destroy()
        res.status(204).json()
    }

}

module.exports = new AdminController()