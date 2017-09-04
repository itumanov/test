const router = require('express').Router();

// list of all api routes
router.use('/words', require(__dirname + '/words.router'));

module.exports = router;
