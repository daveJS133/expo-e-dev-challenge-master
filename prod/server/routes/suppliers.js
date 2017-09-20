var Supplier = require('../models/supplier');
var Product = require('../models/product');

module.exports = {

  getAll: function(req, res, next) {
    Supplier.find(function(err, suppliers) {
      if (err) return res.status(400).json(err);

      res.status(200).json(suppliers);
    });
  },


  createOne: function(req, res, next) {
    Supplier.create(req.body, function(err, supplier) {
      if (err) return res.status(400).json(err);

      res.status(201).json(supplier);
    });
  },


  getOne: function(req, res, next) {
    Supplier.findOne({ id: req.params.id })
    .populate('products')
    .exec(function(err, supplier) {
      if (err) return res.status(400).json(err);
      if (!supplier) return res.status(404).json();

      res.status(200).json(supplier);
    });
  },


  updateOne: function(req, res, next) {
    Supplier.findOneAndUpdate({ id: req.params.id }, req.body, function(err, supplier) {
      if (err) return res.status(400).json(err);
      if (!supplier) return res.status(404).json();

      res.status(200).json(supplier);
    });
  },


  deleteOne: function(req, res, next) {
    Supplier.findOneAndRemove({ id: req.params.id }, function(err) {
      if (err) return res.status(400).json(err);

      res.status(204).json();
    });
  },


  addProduct: function(req, res, next) {
    Supplier.findOne({ id: req.params.id }, function(err, supplier) {
      if (err) return res.status(400).json(err);
      if (!supplier) return res.status(404).json();

      Product.findOne({ id: req.body.id }, function(err, product) {
        if (err) return res.status(400).json(err);
        if (!product) return res.status(404).json();

        supplier.products.push(product);
        supplier.save(function(err) {
          if (err) return res.status(500).json(err);

          res.status(201).json(supplier);
        });
      })
    });
  },


  deleteProduct: function(req, res, next) {
    Supplier.findOne({ id: req.params.id }, function(err, supplier) {
      if (err) return res.status(400).json(err);
      if (!supplier) return res.status(404).json();

      // unvalidated change
      supplier.products = [];
      supplier.save(function(err) {
        if (err) return res.status(400).json(err);

        res.status(204).json(supplier);
      })
    });
  }

};

