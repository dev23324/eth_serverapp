var web3 = require('../ethereum');

var tokenABI = require("./tokenABI.json");

const {
    MANAGER_CONTRACT_ADDRESS: managerAddress,
    GAS,
    GAS_PRICE,
    DEFAULT_ACCOUNT
} = process.env;

const options = {
    from: DEFAULT_ACCOUNT, // default from address
    gasPrice: GAS_PRICE,
    gas: GAS
}

exports.options = options;

exports.tokenContract = (address) => new web3.eth.Contract(tokenABI, address, options);
exports.newTokenContract = new web3.eth.Contract(tokenABI);