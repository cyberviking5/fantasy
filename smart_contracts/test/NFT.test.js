const {assert,expect}=require('chai')
const { network, deployments, ethers } = require("hardhat")
const { developmentChains } = require("../helper-hardhat-config")

const PUBLIC_KEY = process.env.PUBLIC_KEY;


!developmentChains.includes(network.name)
    ? describe.skip
    : describe("Basic NFT Unit Tests", function () {
          let basicNft, deployer
          beforeEach(async()=>{
            accounts = await ethers.getSigners()
            deployer = accounts[0]
            await deployments.fixture(["NFT"])
            basicNft = await ethers.getContract("NFT")
          })

          describe("Constructor",()=>
          {
            it("Initial Value of constructor",async()=>{
                const name=await basicNft.name();
                const symbol=await basicNft.symbol();
                assert(name.toString(),"Dogie");
                assert(symbol.toString(),"DOG");
            })
            it("Initial Value of counter",async()=>{
                const counter=await basicNft.getTokenCounter();
                assert(counter.toString(),"0");
            })
          })
          describe("Mint NFT", () => {
            let txResponse
            beforeEach(async () => {
                txResponse = await basicNft.mintNFT(PUBLIC_KEY,"https://gateway.pinata.cloud/ipfs/QmfTfVhMGjyEj7jmr8awii3UnPK4BNekXq8trLkG1ZN9WY")
                await txResponse.wait(1)
            })
            it("Allows users to mint an NFT, and updates appropriately", async function () {
                const tokenCounter = await basicNft.getTokenCounter()
  
                assert.equal(tokenCounter.toString(), "1")
            })
        })
    })