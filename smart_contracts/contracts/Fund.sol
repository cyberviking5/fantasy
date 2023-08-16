// SPDX-License-Identifier: MIT
pragma solidity ^0.8.8;

contract Fund {
    mapping(address => uint256) public gamblersToAmountBet;
    address[] public gamblers;

    address public immutable i_owner;
    uint256 public constant MINIMUM_ETHER = 0.1 ether;

    
    constructor(){
        i_owner = msg.sender;
    }

    function fund() public payable {
        require(msg.value>=MINIMUM_ETHER,"not enought ETH");
        gamblersToAmountBet[msg.sender] += msg.value;
        gamblers.push(msg.sender);
    }

    function getOwner() public view returns(address)
    {
        return i_owner;
    }
    
}
