var mongoose = require("mongoose");

var supplierSchema = mongoose.Schema({
    name: String,
    products: [{
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product"
        },
        name:String
    }]
});

module.exports = mongoose.model("Supplier", supplierSchema);