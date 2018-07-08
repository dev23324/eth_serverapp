var express = require('express');
var router = express.Router();
var eth = require('./eth');

router.use('/eth', eth);

module.exports = router;