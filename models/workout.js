const mongoose = require("mongoose");

const workoutSchema = new mongoose.Schema({
  day: Date,
  exercises: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Exercise",
    },
  ],
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;