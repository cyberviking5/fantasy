const {assert,expect}=require('chai')
const { network, deployments, ethers } = require("hardhat")
const { developmentChains } = require("../helper-hardhat-config")
const PUBLIC_KEY = process.env.PUBLIC_KEY;
!developmentChains.includes(network.name)
    ? describe.skip
    : describe("Fund Me testing", function () {
          let fund, deployer
          beforeEach(async()=>{
            accounts = await ethers.getSigners()
            deployer = accounts[0]
            await deployments.fixture(["Fund"])
            fund = await ethers.getContract("Fund")
          })

          describe("Constructor",()=>
          {
            it("Initial Value of constructor",async()=>{
                const name=await fund.getOwner();
                assert(name.toString(),deployer.toString());
            })
          })
          describe("funding",()=>{
            it("not enough ETH",async()=>{
                const value=ethers.parseEther("0.09")
                await expect(fund.fund({value:value})).to.be.revertedWith(
                    "not enought ETH"
                )
            })
            it("adding money to the gamblers address",async function(){
                const value=ethers.parseEther("0.2")
                await fund.fund({value:value})
                const response=await fund.gamblersToAmountBet(deployer)
                assert.equal(response.toString(),value.toString());
            })
            it("add gamblers to the array",async function(){
                const value=ethers.parseEther("0.2")
                await fund.fund({value:value})
                const response=await fund.gamblers(0)
                assert.equal(response.toString(),(deployer.address).toString())
            })
          })
    })