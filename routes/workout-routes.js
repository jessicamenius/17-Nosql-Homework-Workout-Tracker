const router = require("express").Router();

const workoutController = require("../controllers/workout-controller");

router.get("/api/workouts", workoutController.getWorkout);
router.get("/api/workouts/range", workoutController.getWorkoutRange);

router.put("/api/workouts/:id", workoutController.addExercise);

router.post("/api/workouts", workoutController.newWorkout);

module.exports = router;
