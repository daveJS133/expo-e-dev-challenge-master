var Product = require('../models/product');
var Supplier = require('../models/supplier');

module.exports = {

  getAll: function(req, res, next) {
    Product.find(function(err, products) {
      if (err) return res.status(400).json(err);

      res.status(200).json(products);
    });
  },


  createOne: function(req, res, next) {
    Product.create(req.body, function(err, product) {
      if (err) return res.status(400).json(err);

      res.status(201).json(product);
    });
  },


  getOne: function(req, res, next) {
    Product.findOne({ id: req.params.id })
    .populate('suppliers')
    .exec(function(err, product) {
      if (err) return res.status(400).json(err);
      if (!product) return res.status(404).json();

      res.status(200).json(product);
    });
  },


  updateOne: function(req, res, next) {
    Product.findOneAndUpdate({ id: req.params.id }, req.body, function(err, product) {
      if (err) return res.status(400).json(err);
      if (!product) return res.status(404).json();

      res.status(200).json(product);
    });
  },


  deleteOne: function(req, res, next) {
    Product.findOneAndRemove({ id: req.params.id }, function(err) {
      if (err) return res.status(400).json(err);

      res.status(204).json();
    });
  }
};
