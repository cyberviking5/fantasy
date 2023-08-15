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
    const SimpleFlashLoan=await deploy("SimpleFlashLoan",{
        from:deployer,
        args:["0x0496275d34753A48320CA58103d5220d394FF77F"],
        log:true,
        waitConfirmation:network.config.blockConfirmation || 5,
    })
    if (network.config.chainId === 11155111 && process.env.ETHERSCAN_API_KEY) {
        console.log("Waiting for block confirmations...")
        // await NFT.deployTransaction.wait(6)
        await verify(SimpleFlashLoan.address, ["0x0496275d34753A48320CA58103d5220d394FF77F"])
      }
    log("----------------------------------")
    //when going for localhost or network we want to use mock
}
module.exports.tags=["all","SimpleFlashLoan"]