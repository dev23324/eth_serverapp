var express = require('express');
var router = express.Router();
var btcController = require('../../controllers/btcController');

router.post('/getNewAddress', btcController.create);
router.post('/getBalance', btcController.getBalance);
router.post('/withdrawBTC', btcController.withdrawBTC);
router.post('/withdrawBTCFromAccount', btcController.withdrawBTCFromAccount);

module.exports = router;