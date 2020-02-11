const mongoose = require("mongoose");

const UserBook = require("./UserBook");

//TODO: Improve validation
const BookshelfSchema = new mongoose.Schema({
  userBooks: [{
    type: UserBook,
    required: true,
  }],
  mode: {
    type: String
  },
  sortedBy: {
    type: String
  }
});

const Bookshelf = mongoose.model("Bookshelf", BookshelfSchema);

module.exports = {
  Bookshelf
};
