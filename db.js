const mysql = require('mysql2');
require('dotenv').config();

let connection;

if (process.env.DB_URL) {
  connection = mysql.createConnection(process.env.DB_URL);
} else {
  connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
  });
}

connection.connect(err => {
  if (err) {
    console.error('MySQL bağlantı hatası: ', err);
    return;
  }
  console.log('MySQL Connected...');
});

module.exports = connection;
