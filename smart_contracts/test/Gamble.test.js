const {assert,expect}=require('chai')
const { network, deployments, ethers } = require("hardhat")
const { developmentChains } = require("../helper-hardhat-config")
const PUBLIC_KEY = process.env.PUBLIC_KEY;
!developmentChains.includes(network.name)
    ? describe.skip
    : describe("Gamble Testing testing", function () {
          let Gamble, deployer
          beforeEach(async()=>{
            accounts = await ethers.getSigners()
            deployer = accounts[0]
            await deployments.fixture(["Gamble"])
            Gamble = await ethers.getContract("Gamble")
          })

          describe("Constructor",()=>
          {
            it("Owner Check",async()=>{
                const name=await Gamble.getOwner();
                assert(name.toString(),deployer.toString());
            })
            it("Entry Fees",async()=>{
                const value=await Gamble.getEntryFees();
                assert(value.toString(),"0.2");
            })
          })
          
    })