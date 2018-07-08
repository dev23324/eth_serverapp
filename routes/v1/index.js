var express = require('express');
var router = express.Router();
var eth = require('./eth');
var btc = require('./btc');

router.use('/eth', eth);
router.use('/btc', btc);

module.exports = router;