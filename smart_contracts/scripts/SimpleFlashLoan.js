// const { getNamedAccounts,ethers } = require("hardhat");
const { network, deployments, ethers } = require("hardhat")

async function main(){
    accounts = await ethers.getSigners()
            deployer = accounts[0]
            await deployments.fixture(["SimpleFlashLoan"])
            simpleFlashLoan = await ethers.getContract("SimpleFlashLoan")
            const abc=  await simpleFlashLoan.executeOperation(process.env.USDC_ADDRESS,10,0.1,);
  
}
main()
.then(()=>{process.exit(0)})
.catch((error)=>{console.log(error);process.exit(1)});