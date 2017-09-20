var mongoose    = require('mongoose');


var productSchema = new mongoose.Schema({
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
  price: {
    type: Number,
    required: true
  },
  supplier: {
    type : mongoose.Schema.ObjectId,
    ref : 'Supplier'
  }
});



module.exports = mongoose.model('Product', productSchema);
