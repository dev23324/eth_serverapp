var express = require('express');
var router = express.Router();
var ethController = require('../../controllers/ethController');

router.get('/tx/receipt/:tx_hash', ethController.transactionReceipt);
router.get('/balance/:contract/:account', ethController.tokenBalance);
router.get('/create', ethController.create);
router.post('/sendTransaction', ethController.sendTransaction);
router.post('/transferToken', ethController.transferToken);

module.exports = router;