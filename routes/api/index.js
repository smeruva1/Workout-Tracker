//defining middleware as it allows us to group the route handlers
const router = require('express').Router();

// import api route files
const workOutRoutes = require('./workout-routes');

// set up and prepend api routes from imported files
router.use('/workouts', workOutRoutes);

// export packaged routes
module.exports = router;
