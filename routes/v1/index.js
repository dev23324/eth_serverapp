var express = require('express');
var router = express.Router();
var token = require('./token');
var account = require('./account');
var eth = require('./eth');

router.use('/token', token);
router.use('/account', account);
router.use('/eth', eth);

module.exports = router;