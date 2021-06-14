const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3001;

const db = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/populate", {
  useNewUrlParser: true,
});

app.get("/", (req, res) => {
  res.sendFile("index.html");
});

app.get("/exercise", (req, res) => {
  res.sendFile("exercise.html", { root: __dirname + "/public" });
});

app.get("/stats", (req, res) => {
  res.sendFile("stats.html");
});

app.get("/api/workouts", (req, res) => {
  db.Workout.find({})
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

app.post("/api/workouts", (req, res) => {});

app.put("api/workouts/undefined", (req, res) => {});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
