'use strict'

let router = require('express').Router()
let productController = require('../controllers/productController')
let supplerController = require('../controllers/supplierController')

router.param('id', controller.shipId)

router.route('/api/v1/')
  .get(productController.listAll)


router.route('/api/v1/products')
  .get(productController.getProducts)
  .post(productController.new)




  router.route('/api/v1/products:id')
  .get(productController.getOneProduct)
  .put(productController.update)
  .delete(productController.delete)


  router.route('/api/v1/suppliers')
    .get(supplierController.getSuppliers)
    .post(supplierController.new)
    .delete(supplierController.delete)



    router.route('/api/v1/suppliers:id')
    .get(supplierController.getOneSupplier)
    .put(supplierController.update)
    .delete(supplierController.delete)

module.exports = router
