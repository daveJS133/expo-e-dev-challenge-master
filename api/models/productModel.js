var mongoose = require("mongoose");

var productSchema = mongoose.Schema({
    name: String,
    price: Number,
    supplier: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Supplier"
        },
        name:String
    }
});

module.exports = mongoose.model("Supplier", supplierSchema);