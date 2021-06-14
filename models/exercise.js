const mongoose = require("mongoose");

const exerciseSchema = new mongoose.Schema({
  type: String,
  name: String,
  duration: Number,
  weight: Number,
  reps: Number,
  sets: Number,
});

module.exports = mongoose.model("Exercise", exerciseSchema);
