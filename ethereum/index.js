var Web3 = require("web3");
// connect ETH node
const {
  ETHEREUM_NODE_URL: ethNode
} = process.env;

console.log(ethNode);
web3 = new Web3(new Web3.providers.HttpProvider(ethNode));
// web3 = new Web3(new Web3.providers.WebsocketProvider(ethNode));
web3.eth.getCoinbase().then(console.log);
var version = web3.version.api;
console.log(version);

module.exports = web3;