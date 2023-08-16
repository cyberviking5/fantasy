
const {networkConfig,developmentChains,}=require('../helper-hardhat-config.js')
require("dotenv").config()
const {network}=require('hardhat');
const {verify}=require('../utils/verify.js')

module.exports=async({getNamedAccounts,deployments})=>{
    const {deploy,log}=deployments;
    const {deployer}=await getNamedAccounts();
    const chainId=network.config.chainId
    const value=ethers.parseEther("1")
    const Gamble=await deploy("Gamble",{
        from:deployer,
        args:[value],
        log:true,
        waitConfirmation:network.config.blockConfirmation || 10,
    })

    if (network.config.chainId === 11155111 && process.env.ETHERSCAN_API_KEY) {
        console.log("Waiting for block confirmations...")
        await verify(Gamble.address, [value])
      }
    

    log("----------------------------------")
}
module.exports.tags=["all","Gamble"]