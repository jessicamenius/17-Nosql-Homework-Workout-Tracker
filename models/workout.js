const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  type: String,
  name: String,
  duration: Number,
  weight: Number,
  reps: Number,
  sets: Number,
  distance: Number,
});

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now(),
  },
  totalDuration: { Number, default: 0 },
  exercises: [exerciseSchema],
});

const Workout = mongoose.model("workout", workoutSchema);
