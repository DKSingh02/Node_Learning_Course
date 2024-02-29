const Product = require('../models/product');

// Controller function to render the 'add-product' page
exports.getAddProduct = (req, res, next) => {
  res.render('add-product', { // Render the 'add-product' view
    pageTitle: 'Add Product',
    path: '/admin/add-product', // Set the current path
    formsCSS: true, // Include CSS styles for forms
    productCSS: true, // Include CSS styles for products
    activeAddProduct: true // Set 'activeAddProduct' flag to true for active navigation item
  });
};

exports.postAddProduct = async (req, res, next) => {
  try {
    const product = new Product(req.body.title);
    await product.save();
    res.redirect('/');
  } catch (error) {
    console.error('Error adding product:', error);
    next(error);
  }
};

// Controller function to render the 'shop' page and fetch products
exports.getProducts = async (req, res, next) => {
  try {
    const products = await Product.fetchAll();
    res.render('shop', { // Render the 'shop' view
      prods: products, // Pass the fetched products to the view
      pageTitle: 'Shop',
      path: '/',
      hasProducts: products.length > 0,
      activeShop: true, // Set 'activeShop' flag to true for active navigation item
      productCSS: true // Include CSS styles for products
    });
  } catch (error) {
    console.error('Error fetching products:', error);
    next(error);
  }
};