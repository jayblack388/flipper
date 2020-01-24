const router = require('express').Router();
const crewRoutes = require('./crews');
const pirateRoutes = require('./pirates');

router.use('/crew', crewRoutes);
router.use('/pirate', pirateRoutes);

module.exports = router;
