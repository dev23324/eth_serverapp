var Web3 = require('web3');

var Contracts = require('../token/contract');

exports.tokenBalance = (req, res) => {
    if (!Web3.utils.isAddress(req.params.contract)) {
        return res.status(422).json({
            message: "invalid artist_address"
        });
    }

    if (!Web3.utils.isAddress(req.params.account)) {
        return res.status(422).json({
            message: "invalid artist_address"
        });
    }
    let tokenContract = Contracts.tokenContract(req.params.contract);
    tokenContract.methods.balanceOf(req.params.account).call()
        .then(result => {
            console.log(`Check balance for ${req.params.account} at ${req.params.contract} : ${result}`)
            res.json({
                type: 1,
                success: true,
                account: req.params.account,
                token: req.params.contract,
                balance: result
            });
        })
        .catch(error => {
            res.status(500).json({
                message: error
            });
        });
}