// ormconfig.js
module.exports = {
    type: 'mysql',
    host: 'localhost',
    port: 3306, // This is default port
    username: '', // Replace 'your_username' with the actual username
    password: '', // Replace 'your_password' with the actual password
    database: '',
    entities: ['../models/product.model.ts'],
    synchronize: true,
};
