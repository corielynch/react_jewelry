const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  handle: { type: String, required: true },
  title: { type: String, required: true },
  body: { type: String, required: true },
  tags: { type: String, required: true },
  price: { type: Number, required: true },
  img: { type: String, required: true },

});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;

