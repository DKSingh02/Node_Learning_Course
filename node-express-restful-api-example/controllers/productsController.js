const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '..', 'data', 'products.json');

// Function to read products from the JSON file
const getProductsFromFile = () => {
    return new Promise((resolve, reject) => {
        fs.readFile(productsFilePath, (err, fileContent) => {
            if (err) {
                reject(err);
            } else {
                resolve(JSON.parse(fileContent));
            }
        });
    });
};

// Function to write products to the JSON file
const saveProductsToFile = products => {
    return new Promise((resolve, reject) => {
        fs.writeFile(productsFilePath, JSON.stringify(products), err => {
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        });
    });
};

module.exports = {
    getProductsFromFile,
    saveProductsToFile
};
