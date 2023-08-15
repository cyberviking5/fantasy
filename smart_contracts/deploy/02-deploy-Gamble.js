//import
 //main function
 //calling main function
//  async function deployFun(){
//     console.log("hi");
//  }
//  module.exports.default=deployFun;
const {networkConfig,developmentChains,}=require('../helper-hardhat-config.js')
require("dotenv").config()
const {network}=require('hardhat');
const {verify}=require('../utils/verify.js')

module.exports=async({getNamedAccounts,deployments})=>{
    // const {getNamedAccounts,deployments}=hre;
    const {deploy,log}=deployments;
    const {deployer}=await getNamedAccounts();
    const chainId=network.config.chainId
    // const ethUsdPriceAddress=networkConfig[chainId]["ethUsdPriceFeed"]
    const Gamble=await deploy("Gamble",{
        from:deployer,
        args:[],
        log:true,
        waitConfirmation:network.config.blockConfirmation || 5,
    })

    if (network.config.chainId === 11155111 && process.env.ETHERSCAN_API_KEY) {
        console.log("Waiting for block confirmations...")
        // await NFT.deployTransaction.wait(6)
        await verify(Gamble.address, [])
      }
    

    log("----------------------------------")
    //when going for localhost or network we want to use mock
}
module.exports.tags=["all","NFT"]