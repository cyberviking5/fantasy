// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Gamble {
    address private immutable owner;
    uint256 public immutable entryFee;
    // enum TeamResult { NotSettled, Win, Loss }
    bool hasMatchCompleted;
    function setMatchStatus( address _user) private {
        if(users[_user].result==1 || users[_user].result==2){
            hasMatchCompleted=true;
        }
        else{
            hasMatchCompleted=false;
        }
    }
    function setResultStatusWon(address user ) public{
            users[user].result=1;
    }

    function setResultStatusLost(address user ) public{
            users[user].result=0;
    }
    function setResultStatusLive(address user ) public{
            users[user].result=2;
    }


    struct User {
        bool hasEntered;
        uint result;
    }
    mapping(address => User) public users;
    mapping(address => uint256) public gamblersToAmountBet;
    address[] public gamblers;

    event UserEntered(address user,uint256 amount);
    event UserWon(address user, uint256 amount);
    event UserLost(address user, uint256 amount);

    constructor(uint256 _entryFee) {
        owner = msg.sender;
        entryFee=_entryFee;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can call this function");
        _;
    }

    // function setEntryFee(uint256 _entryFee) public onlyOwner {
    //     entryFee = _entryFee;
    // }

    function enter() public payable {
        require(msg.value >= (entryFee / 10**18), "Insufficient entry fee");
        require(!users[msg.sender].hasEntered, "You have already entered");
        require(!hasMatchCompleted,"You can't bet now match already complted");
        gamblersToAmountBet[msg.sender] = msg.value;
        gamblers.push(msg.sender);
        users[msg.sender].hasEntered = true;
        emit UserEntered(msg.sender,msg.value);
    }

    function getUserEntryStatus(address _user) public view returns (bool) {
        return users[_user].hasEntered;
    }
   function getBalance() public view returns (uint256) {
    return address(this).balance;
    }
    function settleTeamResult(address _user) public  {
        require(users[_user].hasEntered, "User has not entered");
            require(users[_user].result == 2, "Result already decided");
        // users[_user].result = _result;
        if (users[_user].result == 1) {
            uint256 winnings = entryFee + (gamblersToAmountBet[_user]/gamblers.length);
            payable(_user).transfer(winnings);
            emit UserWon(_user, winnings);
        } else if (users[_user].result == 0) {
            uint256 lossAmount = entryFee;
            emit UserLost(_user, lossAmount);
        }
    }
    function withdraw() public onlyOwner {

        require(hasMatchCompleted,"wait for match completion");
        payable(owner).transfer(address(this).balance);
    }

    function getOwner() public view returns(address)
    {
        return owner;
    }
    function getEntryFees() public view returns(uint256)
    {
        return entryFee;
    }
}
