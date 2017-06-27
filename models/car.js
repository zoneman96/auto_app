var mongoose        = require("mongoose");

// Mongoose Model Config
var carSchema = new mongoose.Schema({
    image: [],
    year: Number,
    make: String,
    model: String,
    trim: String,
    miles: Number,
    price: Number,
    body: String,
    featured: {type: Boolean, default: false}
})

carSchema.virtual('format.price').get(function(n, x) {
    return this.price.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
});

module.exports = mongoose.model("Car", carSchema);