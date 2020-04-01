const router = require("express").Router();
const Workout = require("../models/Workout");

router.get('/api/workouts', (req, res) => {

    Workout.find({})
        .then(workoutData => {
            console.log(workoutData);
            res.json(workoutData);
        })
        .catch(err => {
            console.log(err);
            res.json(err);
        });
});


router.get('/api/workouts/:id', ({ params }, res) => {
    Workout.findByIdAndUpdate(params.id)
        .then(workoutData => res.json(workoutData))
        .catch(err => {
            console.log(err);
            res.json(err);
        });
});


router.post('/api/workouts', ({body}, res) => {

    Workout.create(body)
        .then(workoutData => {
            console.log(workoutData);
            res.json(workoutData);
        })
        .catch(err => {
            console.log(err);
            res.json(err);
        });
});

// update workout by id
router.put('/api/workouts/:id', ({ params }, res) => {
    //Workout.findByIdAndUpdate(params.id, { $push: { exercises: _id } })
    Workout.findByIdAndUpdate(params.id)
        .then(workoutData => res.json(workoutData))
        .catch(err => {
            console.log(err);
            res.json(err);
        });
});

// delete workout by id
router.delete('/api/workouts/:id', ({ params }, res) => {
    //Workout.findByIdAndUpdate(params.id, { $push: { exercises: _id } })
    Workout.findByIdAndDelete(params.id)
        .then(workoutData => res.json(workoutData))
        .catch(err => {
            console.log(err);
            res.json(err);
        });
});


router.get('/api/workouts/range', (req, res) => {

    Workout.find({}).limit(7)
        .then(workoutData => {
            console.log(workoutData);
            res.json(workoutData);
        })
        .catch(err => {
            console.log(err);
            res.json(err);
        });
});

// export packaged routes
module.exports = router;
