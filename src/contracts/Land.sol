// SPDX-Licence-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract Land is ERC721{

uint256 public cost = 1 ether;
uint256 public maxSupply = 5;
uint256 public totalSupply = 0;

struct Building {
    string name;
    address owner;
    int256 posX;
    int256 posY;
    int256 posZ;
    uint256 sizeX;
    uint256 sizeY;
    uint256 sizeZ;
}

Building[] public buildings;

Constructor(string memory _name, string memory _symbol, uint256 _cost) ERC721(_name, _symbol) {
cost = _cost;
buildings.push(
Building("city hall", address(0x0), 0, 0,0 ,10,10,10);  
);
}

function mint(uint256 _id) public payable {
    uint256 supply = totalSupply;
    require(supply<=maxSupply);
    require(buildings[_id - 1].owner == address(0x0));
    require(msg.value) >= 1 ether;

    buildings[_id - 1].owner = msg.sender;
    totalSupply = totalSupply + 1;
    _safeMint(msg.sender, _id);
}

function transferFrom(
    address from,
    address to,
    uint256 tokenId
) public override {
    require(
        _isApprovedOrOwner(_msgSender(), tokenId),
        "ERC721: transfer caller is not owner nor approved"
    );

    buildings[tokenId - 1].owner = to;
    _transfer(from,to, tokenId);
}

function safeTransferFrom(
    address from,
    address to,
    uint256 tokenId,
    bytes memory _data
) public override {
    require(
        _isApprovedOrOwner(_msgSender(), tokenId),
        "ERC721: transfer caller is not owner nor approved"
    );

    buildings[tokenId - 1].owner = to;
    _safeTransfer(from,to, tokenId, _data);
}

function getBuildings() public  view returns(Building[] memory){
    return buildings;
}

function getBuildings(uint256 _id) public  view returns(Building memory){
    return buildings[_id - 1];
}

}