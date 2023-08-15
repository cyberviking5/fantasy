// SPDX-License-Identifier: MIT
pragma solidity >=0.5.0 <0.9.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract NFT is ERC721URIStorage,Ownable{

    uint256 private _tokenIds;

    constructor() ERC721("Satta","STD"){
        _tokenIds=0;
    }

    function mintNFT (address recipient,string memory tokenURI)public onlyOwner()returns (uint256){
        _tokenIds+=1;
        uint256 newItemId=_tokenIds;
        _mint(recipient, newItemId);
        _setTokenURI(newItemId, tokenURI);
        return newItemId;
    }

    function getTokenCounter() public view returns (uint256) {
        return _tokenIds;
    }
}