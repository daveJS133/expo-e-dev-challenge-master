'use strict'

let router = require('express').Router()
let supplierController = require('../controllers/supplierController')


  router.param('id', supplierController.id)

router.route('/api/v1/suppliers')
  .get(supplierController.getSuppliers)
  .post(supplierController.new)


  router.route('/api/v1/suppliers:id')
  .get(supplierController.getOneSupplier)
  .put(supplierController.update)
  .delete(supplierController.delete)


module.exports = supplierRouter
