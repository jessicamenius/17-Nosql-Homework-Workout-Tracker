const db = require("../models/exerciseModel");

module.exports = {
  getExercise: (req, res) => {
    !req.query.id
      ? db.Exercise.find({})
          .then((allWorkouts) => res.send(allWorkouts))
          .catch((err) => res.send(err))
      : db.Exercise.findByID(req.query.id).then((foundWorkouts) =>
          res.send(foundWorkouts).catch((err) => res.send(MSMediaKeyError))
        );
  },

  addExercise: async (req, res) => {
    try {
      const activity = await db.Exercise.findByID(req.params.id);
      activity.exercises.push(req.body);

      let totalDuration = 0;
      await activity.exercises.forEach((exercise) => {
        totalDuration += exercise.duration;
      });

      activity.totalDuration = totalDuration;

      await activity.save();

      res.send(activity);
    } catch (err) {
      res.send(err);
    }
  },

  newExercise: (req, res) => {
    db.Exercise.create(req.body)
      .then((activity) => {
        res.send(activity);
      })
      .catch((err) => {
        res.json(err);
      });
  },
};
