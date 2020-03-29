const router = require("express").Router();
const Workout = require("../models/Workout");

router.post('/api/workouts', (req, res) => {

    Workout.create({})
        .then(workoutData => {
            console.log(workoutData);
            res.json(workoutData);
        })
        .catch(err => {
            console.log(err);
            res.json(err);
        });
})
