const { assert, expect } = require("chai");
const { network, deployments, ethers } = require("hardhat");
const { developmentChains } = require("../helper-hardhat-config");
const PUBLIC_KEY = process.env.PUBLIC_KEY;
!developmentChains.includes(network.name)
  ? describe.skip
  : describe("Gamble Testing testing", function () {
      let Gamble, deployer,user1;
      beforeEach(async () => {
        accounts = await ethers.getSigners();
        deployer = accounts[0];
        user1=accounts[1];
        await deployments.fixture(["Gamble2"]);
        Gamble = await ethers.getContract("Gamble2");
      });

      describe("Constructor", () => {
        it("Owner Check", async () => {
          const name = await Gamble.getOwner();
          assert(name.toString(), deployer.toString());
        });
        it("Entry Fees", async () => {
          const value = await Gamble.getEntryFee();
          assert(value.toString(), "1");
        });
      });

      describe("Enter game", () => {
        it("Users can enter the game", async () => {
          const value= ethers.parseEther("1");
          await Gamble.enter({value:value})
          const response=await Gamble.gamblersToAmountBet(deployer)
          assert.equal(response.toString(),value.toString());
        });

        it("add gamblers to the array",async function(){
          const value=ethers.parseEther("0.2")
          await Gamble.enter({value:value})
          const response=await Gamble.gamblers(0)
          assert.equal(response.toString(),(deployer.address).toString())
      })
      });
    });
