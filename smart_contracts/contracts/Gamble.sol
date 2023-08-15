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
}