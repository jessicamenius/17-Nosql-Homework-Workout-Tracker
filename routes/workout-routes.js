const router = require("express").Router();

const workoutController = require("../controllers/workout-controller");

router.get("/api/workouts", workoutContorller.getWorkout);
router.get("/api/workouts/range", workoutContorller.getWorkoutRange);

router.put("/api/workouts/:id", workoutContorller.addExercise);

router.post("/api/workouts", workoutContorller.newWorkout);

module.exports = router;
