const Land = artifacts.require("Land");

module.exports = async function (deployer) {

    const NAME = "Samsara Building"
    const SYMBOL = "SB"
    const COST = web3.utils.toWei('100','finney')
  await deployer.deploy(Land, NAME, SYMBOL, COST);
};
 