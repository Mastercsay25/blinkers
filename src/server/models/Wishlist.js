const mongoose = require("mongoose");

const Book = require("./Book");

//TODO: Improve validation
const WishlistSchema = new mongoose.Schema({
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

const Wishlist = mongoose.model("Wishlist", WishlistSchema);

module.exports = {
  Wishlist
};
