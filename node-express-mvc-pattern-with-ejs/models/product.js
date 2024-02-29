const fs = require('fs').promises;
const path = require('path');

// Construct the path to the products JSON file
const productsJSONPath = path.join(__dirname, '..', 'data', 'products.json');

// Define a function to read products from the JSON file
const getProductsFromFile = async () => {
  try {
    const fileContent = await fs.readFile(productsJSONPath); // Read the file asynchronously
    return JSON.parse(fileContent); // Parse the file content to JSON and return the parsed data
  } catch (error) {
    console.error('Error reading file:', error);
    return [];
  }
};

module.exports = class Product {
  constructor(title) {
    this.title = title;
  }

  // Method to save the product to the JSON file using async/await
  async save() {
    try {
      let products = await getProductsFromFile(); // Read existing products from the file
      products.push(this);
      await fs.writeFile(productsJSONPath, JSON.stringify(products)); // Write the updated products array to the file
    } catch (error) {
      console.error('Error writing file:', error);
    }
  }

  // Static method to fetch all products from the JSON file using async/await
  static async fetchAll() {
    return await getProductsFromFile();
  }
};
