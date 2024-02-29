const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');

// GET /products
router.get('/products', async (req, res) => {
    try {
        const products = await productsController.getProductsFromFile();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
});

// GET / single product
router.get('/products/:id', async (req, res) => {
    try {
        const productId = Number(req.params.id);
        const products = await productsController.getProductsFromFile();
        const filteredProducts = products.filter((product ) => { 
            return product.id === productId;
        });

        
        //const products = await productsController.getProductsFromFile();
        res.json(filteredProducts);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
});


// POST /products
router.post('/products', async (req, res) => {
    try {
        const newProduct = req.body;
        const products = await productsController.getProductsFromFile();
        products.push(newProduct);
        await productsController.saveProductsToFile(products);
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
});

// PUT /products/:id
router.put('/products/:id', async (req, res) => {
    try {
        const productId = req.params.id;
        const updatedProduct = req.body;
        const products = await productsController.getProductsFromFile();
        const index = products.findIndex(product => product.id === productId);
        if (index !== -1) {
            products[index] = { ...products[index], ...updatedProduct };
            await productsController.saveProductsToFile(products);
            res.json(products[index]);
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
});

// DELETE /products/:id
router.delete('/products/:id', async (req, res) => {
    try {
        const productId = Number(req.params.id);
        const products = await productsController.getProductsFromFile();
        const filteredProducts = products.filter(product => product.id !== productId);
        if (filteredProducts.length < products.length) {
            await productsController.saveProductsToFile(filteredProducts);
            res.status(204).end();
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;
