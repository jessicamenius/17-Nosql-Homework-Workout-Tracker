const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/shoes_db", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

const publicRoutes = require("./routes/public-routes.js");
app.use(publicRoutes);

const workoutRoutes = require("./routes/workout-routes");
app.use(workoutRoutes);

app.listen(PORT, () => console.log(`listening at http://localhost:${PORT}`));
