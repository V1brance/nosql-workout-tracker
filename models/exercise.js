const { Schema, model } = require("mongoose");

const exerciseSchema = new Schema({
  type: {
    type: String,
    trim: true,
    required: "Enter an exercise type",
  },
  name: {
    type: String,
    trim: true,
    required: "Enter an exercise name",
  },
  duration: {
    type: Number,
    required: "Enter an exercise duration",
  },
  weight: {
    type: Number,
  },
  reps: {
    type: Number,
  },
  sets: {
    type: Number,
  },
  distance: {
    type: Number,
  },
});

const Exercise = model("Exercise", exerciseSchema);

module.exports = Exercise;
