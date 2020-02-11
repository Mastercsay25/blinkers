const mongoose = require("mongoose");

const Book = require("./Book");

//TODO: Improve validation
const ShoppingCartSchema = new mongoose.Schema({
  books: [{
    type: Book,
    required: true,
  }],
  mode: {
    type: String
  },
  sortedBy: {
    type: String
  }
});

const ShoppingCart = mongoose.model("ShoppingCart", ShoppingCartSchema);

module.exports = {
  ShoppingCart
};
