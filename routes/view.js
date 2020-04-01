const router = require("express").Router();
const Workout = require("../models/Workout");
const path = require("path");

router.get('/exercise', (req, res) => {

    res.sendFile(path.join(__dirname, '../public/exercise.html'));
});

router.get('/stats', (req, res) => {

    res.sendFile(path.join(__dirname, '../public/stats.html'));
});

// export packaged routes
module.exports = router;
