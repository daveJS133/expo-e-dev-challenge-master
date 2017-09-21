'use strict'

let router = require('express').Router()
let productController = require('../controllers/productController')
let supplierController = require('../controllers/supplierController')



if(productController.id){
  router.param('id', productController.id)
}else if(supplierController.id){
  router.param('id', supplierController.id)
}else{
  return console.log("param id is undefined")
}


router.route('/')
  .get(productController.listAll)


router.route('/products')
  .get(productController.getProducts)
  .post(productController.new)




  router.route('/products:id')
  .get(productController.getOneProduct)
  .put(productController.update)
  .delete(productController.delete)


  router.route('/suppliers')
    .get(supplierController.getSuppliers)
    .post(supplierController.new)
    .delete(supplierController.delete)



    router.route('/suppliers:id')
    .get(supplierController.getOneSupplier)
    .put(supplierController.update)
    .delete(supplierController.delete)

module.exports = router
