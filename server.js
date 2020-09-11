const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3000;
require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./public"));

const fitnessRoutes = require("./routes/exercise-routes");
app.use(fitnessRoutes);

const publicRoutes = require("./routes/public-routes");
app.use(publicRoutes);

app.listen(PORT, () => console.log(`listening at: http://localhost:${PORT}`));

mongoose.connect(
  process.env.MONGODB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true,
  },
  (err) => {
    if (err) throw err;
    console.log("MongoBD connection established");
  }
);
