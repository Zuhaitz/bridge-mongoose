const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  name: { type: String, unique: true },
  price: { type: Number, required: true },
});

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;
