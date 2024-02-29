const db = require('../utils/db');

const getProducts = () => {
    return db.query('SELECT * FROM product');
};

const addProduct = ({ text, price, description, imageUrl }) => {
    return db.query('INSERT INTO product (text, price, description, imageUrl) VALUES (?, ?, ?, ?)', [text,
        price, description, imageUrl]);

};

const updateProduct = (id, { text, price, description, imageUrl }) => {
    return db.query('UPDATE product SET text = ?, price = ?, description = ?, imageUrl = ? WHERE id = ?', [text, price, description, imageUrl, id]);
};


const deleteProduct = (id) => {
    return db.query('DELETE FROM product WHERE id = ?', [id]);
};

module.exports = {
    getProducts,
    addProduct,
    updateProduct,
    deleteProduct
};
