var express = require('express');
var app     = express();

require('./db')(app);
require('./parser')(app);

var path = require('path')

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../../client/index.html'));
});

app.use(express.static(path.join(__dirname, '../../client/')));


var products = require('../routes/products');
var suppliers = require('../routes/suppliers');


// Product routes
app.route('/api/v1/products')
.get(products.getAll)
.post(products.createOne);

app.route('/api/v1/products/:id')
.get(products.getOne)
.put(products.updateOne)
.delete(products.deleteOne);



// Supplier routes
app.route('/api/v1/suppliers')
.get(suppliers.getAll)
.post(suppliers.createOne);

app.route('/api/v1/suppliers/:id')
.get(suppliers.getOne)
.put(suppliers.updateOne)
.delete(suppliers.deleteOne);

app.post('/api/v1/suppliers/:id/products', suppliers.addProduct);
app.delete('/api/v1/suppliers/:id/products/:prodId', suppliers.deleteProduct);


module.exports = app;
