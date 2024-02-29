const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');

// GET /api/products , get all products
router.get('/products', async (req, res) => {
    try {
        const [products] = await productsController.getProducts();
        res.json(products);
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// GET / single product
router.get('/products/:id', async (req, res) => {
    try {
        const productId = Number(req.params.id);
        const [products] = await productsController.getProducts();
        const filteredProducts = products.filter((product) => {
            return product.id === productId;
        });

        res.json(filteredProducts);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
});

// POST /api/products
router.post('/products', async (req, res) => {
    const newProduct = req.body;
    try {
        const [products] = await productsController.addProduct(newProduct);
        res.status(201).json(products);
    } catch (error) {
        console.error('Error adding product:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// PUT /api/products/:id
router.put('/products/:id', async (req, res) => {
    const { id } = req.params;
    const  newProduct  = req.body;
    try {
        const success = await productsController.updateProduct(id, newProduct);
        if (success) {
            res.json(success);
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        console.error('Error updating product:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

router.delete('/products/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const success = await productsController.deleteProduct(id);
        if (success) {
            res.status(204).end();
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        console.error('Error deleting product:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;
