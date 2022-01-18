const express = require('express');
const mysql = require('mysql');

const app = express();

const connection = mysql.createConnection({
  host: '172.17.0.2',
  user: 'root',
  password: 'guilhermetosta',
  database: 'guilhermedocker'
});

connection.connect();

app.get('/products', function (req, res) {
  connection.query('SELECT * FROM products', function (err, result) {
    if (err) {
      throw error
    };

    res.send(results.map(item => ({ name: item.name, price: item.price}) ))
  })
})

app.listen(9001, '0.0.0.0', ()=>{
  console.log('listening on port 9001')
})