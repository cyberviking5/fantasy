// SPDX-License-Identifier: MIT
pragma solidity ^0.8.8;

error Insufficient_Bet();

contract Fund {

error fundme_NotOwner();
    mapping(address => uint256) public gamblersToAmountBet;
    address[] public gamblers;

    address public immutable i_owner;
    uint256 public constant MINIMUM_ETHER = 0.1 ether;

    
    constructor(){
        i_owner = msg.sender;
    }

    function fund() public payable {
        if(msg.value<MINIMUM_ETHER)
        {
            revert Insufficient_Bet();
        }
        gamblersToAmountBet[msg.sender] += msg.value;
        gamblers.push(msg.sender);
    }
    
}
