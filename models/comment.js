const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  ownerName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  text: {
    type: String,
    required: true,
  },
});
module.exports = Comment = mongoose.model("comment", commentSchema);
