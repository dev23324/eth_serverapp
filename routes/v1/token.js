var express = require('express');
var router = express.Router();
var tokenController = require('../../controllers/tokenController');

router.get('/balance/:contract/:account', tokenController.tokenBalance);

module.exports = router;
