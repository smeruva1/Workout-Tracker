const express = require("express");
//Import routes definded in routes folder
//const routes = require('./routes');

const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const db = require("./models");
const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutdb", { useNewUrlParser: true });

// turn on routes
app.use(require("./routes/view.js"));
app.use(require("./routes/workout-routes.js"));


app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
