var express = require('express');
var router = express.Router();

var bitcoin_rpc = require('node-bitcoin-rpc')

bitcoin_rpc.init('localhost', '18332', 'Ken111', 'asdfghjkl890ASDFGHJKL111');

exports.create = (req, res) => {
  console.log(req.params);
  console.log(req.query);
  console.log(req.body);
  
  bitcoin_rpc.call('getnewaddress', [], function (err, result) {
    if (err !== null) {
      console.log('I have an error :( ' + err)
    } else {
      console.log('Yay! I need to do whatevere now with ' + result.result)
      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify({ type: 0, ethAddress: req.body.ethAddress, btcAddress:  result.result}));
    }
  })
};

exports.getBalance = (req, res) => {
  console.log(req.params);
  console.log(req.query);
  console.log(req.body);
  console.log(req.body.btcAddress);
  bitcoin_rpc.call('getreceivedbyaddress', [req.body.btcAddress, req.body.minConf], function (err, result) {
    if (err !== null) {
      console.log('I have an error :( ' + err + ' ' + result.error)
    } else {
      console.log('Yay! I need to do whatevere now with ' + result.result)
      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify({ type: 1, ethAddress: req.body.ethAddress, btcBalance:  result.result}));
    }
  })
};

exports.withdrawBTC = (req, res) => {  
  console.log(req.params);
  console.log(req.query);
  console.log(req.body);
  console.log(req.body.btcAddress);
  bitcoin_rpc.call('sendtoaddress', [req.body.btcAddress, req.body.amount / 1000000], function (err, result) {
    if (err !== null) {
      console.log('I have an error :( ' + err + ' ' + result.error)
    } else {
      console.log('Yay! I need to do whatevere now with ' + result.result)
      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify({ type: 2, ethAddress: req.body.ethAddress, txid:  result.result}));
    }
  })
};

exports.withdrawBTCFromAccount = (req, res) => {   
  console.log(req.params);
  console.log(req.query);
  console.log(req.body);
  console.log(req.body.btcAddress);
  bitcoin_rpc.call('sendtoaddress', [req.body.btcAddress, req.body.amount], function (err, result) {
    if (err !== null) {
      console.log('I have an error :( ' + err + ' ' + result.error)
    } else {
      console.log('Yay! I need to do whatevere now with ' + result.result)
      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify({ type: 2, ethAddress: req.body.ethAddress, txid:  result.result}));
    }
  })
};