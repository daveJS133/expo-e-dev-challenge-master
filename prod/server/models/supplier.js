var mongoose    = require('mongoose');

var supplierSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    index: {
      unique: true
    }
  },
  name: {
    type: String,
    required: true
  },
  products: [{
    type : mongoose.Schema.ObjectId,
    ref : 'Product'
  }]
});

module.exports = mongoose.model('Supplier', supplierSchema);
