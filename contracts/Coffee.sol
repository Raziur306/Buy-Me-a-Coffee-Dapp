// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Coffee {
    struct Memo {
        string name;
        string message;
        uint256 timeStamp;
        address sender;
    }

    Memo[] memos;
    address payable owner;

    //settig owner of the contract
    constructor() {
        owner = payable(msg.sender);
    }

    //pay function
    function buyCoffee(string memory name, string memory message)
        public
        payable
    {
        require(msg.value > 0, "Amount must be greater than 0 ether.");
        owner.transfer(msg.value);
        memos.push(Memo(name, message, block.timestamp, msg.sender));
    }

    //get memeos
    function getMemos() public view returns (Memo[] memory) {
        return memos;
    }
}
