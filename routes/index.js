//defining middleware as it allows us to group the route handlers
const router = require('express').Router();

// collect all api endpoints
const apiRoutes = require('./api');

//Load router-level middleware by using the router.use() 
router.use('/api', apiRoutes);

// IF WE HAD HTML ROUTES, THEY'D BE SET UP HERE

module.exports = router;
