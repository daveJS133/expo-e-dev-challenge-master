'use strict'

let router = require('express').Router()
let productController = require('../controllers/productController')


  router.param('id', productController.id)

router.route('/api/v1/products')
  .get(productController.getProducts)
  .post(productController.new)


  router.route('/api/v1/products:id')
  .get(productController.getOneProduct)
  .put(productController.update)
  .delete(productController.delete)


module.exports = productRouter
