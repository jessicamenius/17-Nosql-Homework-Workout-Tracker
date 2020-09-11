const router = require("express").Router();
const fitnessController = require("../controllers/exercise-controller");

router.get("/api/exercises", fitnessController.getExercise);
router.get("api/exercise/range", fitnessController.getExercise);

router.put("/api/exercises/:id", fitnessController.addExercise);

router.post("api/exercises", fitnessController.newExercise);

module.exports = router;
