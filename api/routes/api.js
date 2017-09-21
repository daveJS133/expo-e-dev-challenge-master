'use strict'
let productRouter = require('./product');
let supplierRouter = require('./supplier');
let router = require('express').Router()
let productController = require('../controllers/productController')
let supplierController = require('../controllers/supplierController')
let product = require('./product');
let supplier = require('./supplier');

router.route('/api/v1')
  .get(productController.listAll)
  .get(supplerController.listAll)

  app.use('/api/v1/products', productRouter)
  app.use('/api/v1/suppliers', supplierRouter)

module.exports = router
