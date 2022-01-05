const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  features: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },

  mytimestamp: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("allProducts", ProductSchema);
