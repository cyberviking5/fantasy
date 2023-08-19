const {
  networkConfig,
  developmentChains,
} = require("../helper-hardhat-config.js");
require("dotenv").config();
const { network } = require("hardhat");
const { verify } = require("../utils/verify.js");

module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();
  const chainId = network.config.chainId;
  const value = ethers.parseEther("1");
  const Gamble2 = await deploy("Gamble2", {
    from: deployer,
    args: [value],
    log: true,
    waitConfirmations: network.config.blockConfirmations || 1,
  });

  if (network.config.chainId === 11155111 && process.env.ETHERSCAN_API_KEY) {
    console.log("Waiting for block confirmations...");
    await verify(Gamble2.address, [value]);
  }

  log("----------------------------------");
};
module.exports.tags = ["all", "Gamble2"];
