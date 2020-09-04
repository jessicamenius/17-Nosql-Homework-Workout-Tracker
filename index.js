const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv");
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.listen(PORT, () => console.log(`listening at: http://localhost:${PORT}`));
