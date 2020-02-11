const mongoose = require("mongoose");

//TODO: Ensure all attributes match their type, validation 
const BookSchema = new mongoose.Schema({
  isbn10: {
    type: String,
    required: true,
    minlength: 6
  },
  isbn13: {
    type: String,
    required: true,
    minlength: 6
  },
  title: {
    type: String,
    required: true,
    minlength: 1
  },
  authors: [
    {
      type: String,
      required: true,
      minlength: 1
    }
  ],
  description: {
    type: String,
    required: true,
    minlength: 6
  },
  fileSize: {
    type: String,
    required: true,
    minlength: 6
  },
  printLength: {
    type: String,
    required: true,
    minlength: 6
  },
  publishers: [
    {
      type: String,
      required: true,
      minlength: 6
    }
  ],
  publishDate: {
    type: Date,
    required: true,
    minlength: 6
  },
  language: {
    type: String,
    required: true,
    minlength: 6
  },
  tags: [
    {
      type: String,
      required: true,
      minlength: 6
    }
  ],
  ebookFile: {
    type: String,
    required: true,
    minlength: 6
  },
  covers: [
    {
      type: String,
      required: true,
      minlength: 6
    }
  ],
  recommendations: {
    type: String,
    required: true,
    minlength: 6
  }
});

const Book = mongoose.model("User", BookSchema);

module.exports = {
  User
};

