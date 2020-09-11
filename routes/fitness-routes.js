const router = require("express").Router();
const fitnessController = require("../controllers/exercise-controller");

router.get("/api/workouts", fitnessController.getExercise);
router.get("api/workouts/range", fitnessController.getExercise);

router.put("/api/workouts/:id", fitnessController.addExercise);

router.post("api/workouts", fitnessController.newExercise);

module.exports = router;
