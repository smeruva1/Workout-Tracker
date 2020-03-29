const router = require("express").Router();
const Workout = require("../../models/Workout");

router.get('/', (req, res) => {

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


router.get('/:id', ({ params }, res) => {
    Workout.findOne({
        where: {
            _id: mongojs.ObjectID(params.id)
        }
    })
        .then(workoutData => res.json(workoutData))
        .catch(err => {
            console.log(err);
            res.json(err);
        });
});


router.post('/', (req, res) => {

    Workout.create(req.body)
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
router.put('/:id', ({ params }, res) => {
    Workout.update({
        where: {
            _id: mongojs.ObjectID(params.id)
        }
    })
        .then(workoutData => res.json(workoutData))
        .catch(err => {
            console.log(err);
            res.json(err);
        });
});


// export packaged routes
module.exports = router;
