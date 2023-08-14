// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;
// this is pull request
/**
 * @title Fantasy Sports
 * @dev Smart contract to facilitate fantasy sports
 */
contract Gamble {
    enum Status {
        NO_GAME_IN_PROGRESS,
        PRE_GAME_API,
        PRE_GAME_USER,
        GAME_BEGINS,
        GAME_STOPS
    }

    struct PlayerStats {
        uint256 runs;
        uint256 wickets;
    }

    struct Player {
        uint256 id;
        string name;
        PlayerStats stats;
    }

    /**
     * This struct holds all the information regarding fantasy team
     * name is the fantasy team's name
     * bid is the amount of money bid by the owner on the game
     */
    struct FantasyTeam {
        address payable ownerId;
        string name;
        uint256[] playerIds;
        uint256 captainId;
        uint256 viceCaptainId;
        uint256 bid;
        uint256 score;
    }

    Status gameStatus = Status.NO_GAME_IN_PROGRESS;
    Player[] players;
    FantasyTeam[] fantasyTeams;
    uint256 TEAM_SIZE = 1;
    uint256 RUN_MUL = 1;
    uint256 WICKET_MUL = 50;

    /**
     * This modifier is used by a function to check if the player is valid
     * @param playerID is the unique ID of the player
     */
    modifier onlyValidPlayerID(uint256 playerID) {
        require(playerID < players.length, "Player does not exist");
        _;
    }

    /**
     * Organiser calls this function to start the game
     * @param teamSize is the name of the player
     * @param runMul is the name of the player
     * @param wicketMul is the name of the player
     */
    function startGame(uint256 teamSize, uint256 runMul, uint256 wicketMul) public {
        require(
            gameStatus == Status.NO_GAME_IN_PROGRESS,
            "Game already in progress"
        );

        delete players;
        delete fantasyTeams;
        gameStatus = Status.PRE_GAME_API;
        TEAM_SIZE = teamSize;
        RUN_MUL = runMul;
        WICKET_MUL = wicketMul;
    }

    /**
     * Organiser calls to add the players that will be playing the sport
     * @param playerName is the name of the player
     */
    function addPlayerToGame(string memory playerName) public {
        require(gameStatus == Status.PRE_GAME_API, "Can't add player now");

        Player memory newPlayer;
        newPlayer.name = playerName;
        newPlayer.id = players.length;
        players.push(newPlayer);
    }

    /**
     * Returns the fantasy team id
     * @param ownerId is the id of the owner who owns the fantasy team
     */
    function getFantasyTeamID(address ownerId) private view returns (uint256) {
        for (uint256 i = 0; i < fantasyTeams.length; i++) {
            if (fantasyTeams[i].ownerId == ownerId) {
                return i;
            }
        }
        return fantasyTeams.length;
    }

    /**
     * Checks if player exists in the fantasy team
     * @param playerID is the player id
     * @param fantasyTeamID is the fantasy team id
     */
    function existsPlayerIdInFantasyTeam(
        uint256 playerID,
        uint256 fantasyTeamID
    ) private view returns (bool) {
        uint256[] memory playerIds = fantasyTeams[fantasyTeamID].playerIds;
        for (uint256 i = 0; i < playerIds.length; i++) {
            if (playerIds[i] == playerID) {
                return true;
            }
        }
        return false;
    }

    /**
     * Called when all the players playing the sport is added
     */
    function playersAddedToGame() public {
        require(gameStatus == Status.PRE_GAME_API, "Can't change status");
        gameStatus = Status.PRE_GAME_USER;
    }

    /**
     * Adds new fantasy team. Owner can own only one team
     * @param teamName is the team name
     */
    function addFantasyTeam(string memory teamName) public{
        require(
            gameStatus == Status.PRE_GAME_USER,
            "Fantasy teams can't be added now"
        );

        uint256 fantasyTeamID = getFantasyTeamID(msg.sender);
        require(
            fantasyTeamID == fantasyTeams.length,
            "Team already exists for the user"
        );

        FantasyTeam memory newTeam;
        newTeam.name = teamName;
        newTeam.ownerId = payable(msg.sender);
        newTeam.captainId = 0;
        newTeam.viceCaptainId = 1;
        fantasyTeams.push(newTeam);
    }

    /**
     * Adds player to the fantasy team
     * @param playerID is the player id
     */
    function addPlayerToFantasyTeam(uint256 playerID) public 
    onlyValidPlayerID(playerID)
    {
        require(
            gameStatus == Status.PRE_GAME_USER,
            "Players can't be added to fantasy team now"
        );

        uint256 fantasyTeamID = getFantasyTeamID(msg.sender);
        require(
            fantasyTeamID != fantasyTeams.length,
            "Team does not exists for the user"
        );
        require(
            !existsPlayerIdInFantasyTeam(playerID, fantasyTeamID),
            "Player already in the team"
        );
        require(
            fantasyTeams[fantasyTeamID].playerIds.length < TEAM_SIZE,
            "Team already Full"
        );

        fantasyTeams[fantasyTeamID].playerIds.push(playerID);
    }

    /**
     * Sets captain and vice captain of the fantasy team
     * @param captainID is the captain id
     * @param viceCaptainID is the vice captain id
     */
    function setCaptains(uint256 captainID, uint256 viceCaptainID) public 
    onlyValidPlayerID(captainID)
    onlyValidPlayerID(viceCaptainID)
    {
        require(
            gameStatus == Status.PRE_GAME_USER,
            "Can't set captains for the fantasy team now"
        );

        uint256 fantasyTeamID = getFantasyTeamID(msg.sender);
        require(
            fantasyTeamID != fantasyTeams.length,
            "Team does not exists for the user"
        );
        require(
            existsPlayerIdInFantasyTeam(captainID, fantasyTeamID),
            "Captain not added"
        );
        require(
            existsPlayerIdInFantasyTeam(viceCaptainID, fantasyTeamID),
            "Vice Captain not added"
        );

        fantasyTeams[fantasyTeamID].captainId = captainID;
        fantasyTeams[fantasyTeamID].viceCaptainId = viceCaptainID;
    }

    /**
     * Owners call to bid at the game
     */
    function bid() public payable {
        require(gameStatus == Status.PRE_GAME_USER, "Bids can't be placed now");

        uint256 fantasyTeamID = getFantasyTeamID(msg.sender);
        require(
            fantasyTeamID != fantasyTeams.length,
            "Team does not exists for the user"
        );

        FantasyTeam memory team = fantasyTeams[fantasyTeamID];
        require(team.playerIds.length == TEAM_SIZE, "Team Incomplete");
        require(team.bid == 0, "Can't bid again");
        fantasyTeams[fantasyTeamID].bid = msg.value;
    }

    /**
     * Game begins. No one can form more fantasy team.
     */
    function gameBegins() public {
        require(gameStatus == Status.PRE_GAME_USER, "Can't change status");
        gameStatus = Status.GAME_BEGINS;
    }

    /**
     * Sets player's wickets, runs scored
     * @param playerID is the player id
     * @param runs scored by the player
     * @param wickets taken by the player
     */
    function setplayerStats(
        uint256 playerID,
        uint256 runs,
        uint256 wickets
    ) public 
    onlyValidPlayerID(playerID)
    {
        require(
            gameStatus == Status.GAME_BEGINS,
            "Can't set player's stats now"
        );

        players[playerID].stats.runs = runs;
        players[playerID].stats.wickets = wickets;
    }

    /**
     * Called after receiving all the players' stats
     */
    function gameStops() public {
        require(gameStatus == Status.GAME_BEGINS, "Can't change status");
        gameStatus = Status.GAME_STOPS;
    }

    /**
     * Calculate player's score
     * @param playerID is the player id
     * @param isCaptain is true if player is captain
     * @param isViceCaptain is true if player is vice captain
     */
    function calculatePlayerScore(
        uint256 playerID,
        bool isCaptain,
        bool isViceCaptain
    ) private view returns (uint256) {
        require(
            !(isCaptain && isViceCaptain),
            "A player can not be Captain and Vice Captain at the same time"
        );

        uint256 score = players[playerID].stats.runs *
            RUN_MUL +
            players[playerID].stats.wickets *
            WICKET_MUL;
        if (isCaptain) {
            score *= 3;
        } else if (isViceCaptain) {
            score *= 2;
        }
        return score;
    }

    /**
     * Distributs rewards among the owners
     */
    function distributeRewards() private {
        uint256 sum = 0;
        uint256 totalBid = 0;
        for (uint256 i = 0; i < fantasyTeams.length; i++) {
            sum += fantasyTeams[i].bid * fantasyTeams[i].score;
            totalBid += fantasyTeams[i].bid;
        }
        for (uint256 i = 0; i < fantasyTeams.length; i++) {
            
            uint256 reward ;
            if(sum==0)
            {
                reward = fantasyTeams[i].bid; 
            }
            else
            {
                reward = (fantasyTeams[i].bid *
                    fantasyTeams[i].score *
                    totalBid) / sum;

            }
            fantasyTeams[i].ownerId.transfer(reward);
        }
    }

    /**
     * Calculates teams' score. Team's score is the sum of scores of team's players
     */
    function calculateTeamsScore() public {
        require(gameStatus == Status.GAME_STOPS, "Game has not stopped");

        for (uint256 i = 0; i < fantasyTeams.length; i++) {
            FantasyTeam memory team = fantasyTeams[i];
            for (uint256 j = 0; j < team.playerIds.length; j++) {
                fantasyTeams[i].score += calculatePlayerScore(
                    team.playerIds[j],
                    team.captainId == team.playerIds[j],
                    team.viceCaptainId == team.playerIds[j]
                );
            }
        }
        distributeRewards();
        gameStatus = Status.NO_GAME_IN_PROGRESS;
    }

    /**
     * This function is used to convert uint256 to string
     * Taken from here: https://stackoverflow.com/questions/47129173/how-to-convert-uint-to-string-in-solidity
     * @param _i is a variable of type uint
     * @return _uintAsString the string representation of _i
     */
    function uint2str(uint256 _i)
        internal
        pure
        returns (string memory _uintAsString)
    {
        if (_i == 0) {
            return "0";
        }
        uint256 j = _i;
        uint256 len;
        while (j != 0) {
            len++;
            j /= 10;
        }
        bytes memory bstr = new bytes(len);
        uint256 k = len;
        while (_i != 0) {
            k = k - 1;
            uint8 temp = (48 + uint8(_i - (_i / 10) * 10));
            bytes1 b1 = bytes1(temp);
            bstr[k] = b1;
            _i /= 10;
        }
        return string(bstr);
    }

    function toAsciiString(address x) internal pure returns (string memory) {
        bytes memory s = new bytes(40);
        for (uint256 i = 0; i < 20; i++) {
            bytes1 b = bytes1(uint8(uint256(uint160(x)) / (2**(8 * (19 - i)))));
            bytes1 hi = bytes1(uint8(b) / 16);
            bytes1 lo = bytes1(uint8(b) - 16 * uint8(hi));
            s[2 * i] = char(hi);
            s[2 * i + 1] = char(lo);
        }
        return string(s);
    }

    function char(bytes1 b) internal pure returns (bytes1 c) {
        if (uint8(b) < 10) return bytes1(uint8(b) + 0x30);
        else return bytes1(uint8(b) + 0x57);
    }

    /**
     * This function is called by the users to view available players.
     * @return a string containing list of all available players
     */
    function listPlayers() public view returns (string memory) {
        require(
            gameStatus == Status.PRE_GAME_USER,
            "Players can't be listed now"
        );

        string memory playersList = "";
        for (uint256 i = 0; i < players.length; i++) {
            playersList = string(abi.encodePacked(playersList, "Player ID: "));
            playersList = string(
                abi.encodePacked(playersList, uint2str(players[i].id))
            );
            playersList = string(
                abi.encodePacked(playersList, "; Player Name: ")
            );
            playersList = string(
                abi.encodePacked(playersList, players[i].name)
            );
            playersList = string(abi.encodePacked(playersList, "\n"));
        }
        return playersList;
    }
}