const mongoose = require("mongoose");

const lessonSchema = new mongoose.Schema({
  lessonType: {
    type: String,
    required: true,
  },
  lessonName: {
    type: String,
    required: true,
  },
  lessonDate: {
    type: Date,
    default: Date.now,
  },
  lessonFiles: {
    type: String,
  },
});

module.export = Lesson = mongoose.model("lesson", lessonSchema);
