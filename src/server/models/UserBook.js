const mongoose = require("mongoose");

//TODO: Ensure all attributes match their type, validation 
const BookSchema = new mongoose.Schema({
  book: {
    type: String,
    required: true,
    minlength: 6
  },
  lentStatus: {
    type: Boolean,
    required: true,
    minlength: 6
  },
  lentTo: {
    type: String,
    required: true,
    minlength: 1
  },
  lentOn: {
    type: Date,
    required: true,
    minlength: 1
  },
  shelfPriority: {
    type: String,
    required: true,
    minlength: 1
  },
  section: {
    type: String,
    required: true,
    minlength: 1
  },
  hasRecommended: {
    type: Boolean,
    required: true,
    minlength: 1
  },
  purchasedOn: {
    type: Date,
    required: true,
    minlength: 1
  }
});

const Book = mongoose.model("User", BookSchema);

module.exports = {
  User
};

