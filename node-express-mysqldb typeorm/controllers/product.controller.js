const  getRepository  = require('typeorm');
const Products = require('../models/product.model');

// Create a new product
exports.createProduct = async (req, res) => {
    try {
        const productRepository = getRepository(Products);
        const newProduct = await productRepository.save(req.body);
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get all products
exports.getAllProducts = async (req, res) => {
    try {
        const productRepository = getRepository(Products);
        const products = await productRepository.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a single product by ID
exports.getProductById = async (req, res) => {
    try {
        const productRepository = getRepository(Product);
        const product = await productRepository.findOne(req.params.id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a product by ID
exports.updateProduct = async (req, res) => {
    try {
        const productRepository = getRepository(Product);
        const product = await productRepository.findOne(req.params.id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        productRepository.merge(product, req.body);
        const updatedProduct = await productRepository.save(product);
        res.json(updatedProduct);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete a product by ID
exports.deleteProduct = async (req, res) => {
    try {
        const productRepository = getRepository(Product);
        const product = await productRepository.findOne(req.params.id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        await productRepository.delete(req.params.id);
        res.json({ message: 'Product deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
