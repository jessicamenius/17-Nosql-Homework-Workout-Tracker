const db = require("../models/Workout");

module.exports = {
  getWorkout: (req, res) => {
    !req.query.id
      ? db.Workout.find({})
          .then((allWorkouts) => res.send(allWorkouts))
          .catch((err) => res.send(err))
      : db.Workout.findById(req.query.id)
          .then((foundWorkout) => res.send(foundWorkout))
          .catch((err) => res.send(err));
  },

  addExercise: async (req, res) => {
    try {
      const workout = await db.Workout.findById(req.params.id);
      workout.exercises.push(req.body);
      let totalDuration = 0;
      await workout.exercises.forEach((exercise) => {
        totalDuration += exercise.duration;
      });
      workout.totalDuration = totalDuration;
      await workout.save();
      res.send(workout);
    } catch (error) {
      res.send(error);
    }
  },

  newWorkout: (req, res) => {
    db.Workout.create(req.body)
      .then((workout) => {
        res.send(workout);
      })
      .catch((err) => {
        res.json(err);
      });
  },
};
