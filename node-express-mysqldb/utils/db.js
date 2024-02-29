const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root', 
    password: 'Give your password', // Your MySQL password
    database: 'pruducts'
})

// Below code is for single connection so for each query request
// new connection will be created but for pool connection this is not the case
// hence using pool connection and for new query request it assign from pool of connection
// Simple commented code provided

// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root', // Your MySQL username
//     password: 'your_password', // Your MySQL password
//     database: 'productsdb'
// });

// connection.connect(err => {
//     if (err) {
//         console.error('Error connecting to database:', err);
//         return;
//     }
//     console.log('Connected to MySQL database');
// });

module.exports = pool.promise();
