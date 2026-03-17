const Product = require('../models/product');
const Cart = require('../models/cart');

class shopController {

    async getProducts(req, res) {
        const products = await Product.findAll()
        res.status(200).json(products)
    }

    async getCart(req, res) {
        const cart = await req.user.getCart()
        console.log(cart)
        const products = await cart.getProducts()
        res.status(200).json(products)
    }
}

module.exports = new shopController()