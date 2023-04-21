const mongoose = require("mongoose");

const BookCartSchema = mongoose.Schema({
  BookName: { type: String },
  quantity: { type: Number, default: 1 },
});

const BookCart = mongoose.model("BookCart", BookCartSchema);

module.exports = BookCart;
