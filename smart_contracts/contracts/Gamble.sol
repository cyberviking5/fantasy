// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Gamble {
    address private immutable owner;
    uint256 public immutable entryFee;
    // enum MatchStatus {
    //     NotStarted,
    //     Started,
    //     Completed
    // }
    // MatchStatus private matchStatus;

    struct User {
        bool hasEntered;
    }

    mapping(address => User) public users;
    mapping(address => uint256) public gamblersToAmountBet;
    address[] public gamblers;

    event UserEntered(address user, uint256 amount);
    event UserWon(address user, uint256 amount);
    event UserLost(address user, uint256 amount);

    constructor(uint256 _entryFee) {
        owner = msg.sender;
        entryFee = _entryFee;
        // matchStatus = MatchStatus.NotStarted;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can call this function");
        _;
    }

<<<<<<< HEAD
    // function setMatchStatus(address _user) private {
    //     if (users[_user].result == 1 || users[_user].result == 2) {
    //         matchStatus = MatchStatus.Completed;
    //     } else {
    //         matchStatus = MatchStatus.Started;
    //     }
    // }
=======
    function setMatchStatus(address _user) private {
        if (users[_user].result == 1 || users[_user].result == 0) {
            matchStatus = MatchStatus.Completed;
        } else {
            matchStatus = MatchStatus.Started;
        }
    }
>>>>>>> bbb44e9 (NFT integrated)

    // function setResultStatusWon(address user ) public{
    //         users[user].result=1;
    // }

    // function setResultStatusLost(address user ) public{
    //         users[user].result=0;
    // }
    // function setResultStatusLive(address user ) public{
    //         users[user].result=2;
    // }

    function enter() public payable {
        require(msg.value >= entryFee/10**18, "Insufficient entry fee");
        // require(matchStatus == MatchStatus.NotStarted , "Match already started");
        require(!users[msg.sender].hasEntered, "You have already entered");

        gamblersToAmountBet[msg.sender] = msg.value;
        gamblers.push(msg.sender);
        users[msg.sender].hasEntered = true;
        emit UserEntered(msg.sender, msg.value);
    }

    // function setMatchStatusNotStarted() public  {
    //     matchStatus = MatchStatus.NotStarted;
    // }

    // function setMatchStatusStarted() public  {
    //     matchStatus = MatchStatus.Started;
    // }

    // function setMatchStatusCompleted() public  {
    //     matchStatus = MatchStatus.Completed;
    // }

    function settleTeamResultWon(address user) public {
                 require(users[user].hasEntered, "User has not entered");
                 uint256 winnings = entryFee +
                 (gamblersToAmountBet[user] / gamblers.length);
                 payable(user).transfer(winnings);
                 emit UserWon(user, winnings);
       
    }

    function settleTeamResultLoss(address user) public {
             require(users[user].hasEntered, "User has not entered");
             uint256 lossAmount = entryFee;
             emit UserLost(user, lossAmount);
    }


    function withdraw() public onlyOwner {
        payable(owner).transfer(address(this).balance);
    }

    function getOwner() public view returns (address) {
        return owner;
    }

    function getEntryFee() public view returns (uint256) {
        return entryFee;
    }

    // function getMatchStatus() public view returns (MatchStatus) {
    //     return matchStatus;
    // }

    function getUserEntryStatus(address user) public view returns (bool) {
        return users[user].hasEntered;
    }

    // function getUserResult(address user) public view returns (uint256) {
    //     return users[user].result;
    // }

    function getBalance() public view returns (uint256) {
        return address(this).balance;
    }
}
