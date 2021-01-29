const weth = artifacts.require("weth");

module.exports = async function(deployer) {
  const accounts = await web3.eth.getAccounts();
  const owner = accounts[0];
  deployer.deploy(weth, owner, 1, owner);
};
