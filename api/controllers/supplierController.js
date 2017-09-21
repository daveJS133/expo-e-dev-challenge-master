'use strict';


var mongoose = require('mongoose'),
  Supplier = mongoose.model('Supplier');

exports.list_all_suppliers = function(req, res) {
  Supplier.find({}, function(err, supplier) {
    if (err)
      res.send(err);
    res.json(supplier);
  });
};




exports.create_a_supplier = function(req, res) {
  var new_supplier = new Supplier(req.body);
  new_supplier.save(function(err, supplier) {
    if (err)
      res.send(err);
    res.json(supplier);
  });
};


exports.read_a_supplier = function(req, res) {
  Supplier.findById(req.params.supplierId, function(err, supplier) {
    if (err)
      res.send(err);
    res.json(supplier);
  });
};


exports.update_a_supplier = function(req, res) {
  Supplier.findOneAndUpdate({_id: req.params.supplierId}, req.body, {new: true}, function(err, supplier) {
    if (err)
      res.send(err);
    res.json(supplier);
  });
};


exports.delete_a_supplier = function(req, res) {


  Supplier.remove({
    _id: req.params.supplierId
  }, function(err, supplier) {
    if (err)
      res.send(err);
    res.json({ message: 'Supplier successfully deleted' });
  });
};
