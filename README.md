# Buy Me A Coffee Dapp

This project demonstrates how the transaction happened in Blockchain and how we handle it in React JS.

In this project I have used:

- [hardhat](https://github.com/NomicFoundation/hardhat)
- [Ether.js](https://github.com/ethers-io/ethers.js/)
- [Solidity](https://github.com/ethereum/solidity)
- [React](https://github.com/facebook/react)
- [JavaScript](https://github.com/Raziur306)
- [MetaMask](https://github.com/MetaMask)



For testing and deployment I have used [Görli Testnet](https://github.com/goerli) Testnet. I have done some basic transactions using **Test Ether** and It was working perfectly.

### Verify all the transactions:

https://goerli.etherscan.io/address/0x6203fddE310f4778EE48bE0Fb833F61Dc34eDCeF

## Project Structure
```
project
├── client               # All the react source app code was present there.
├── contracts            # Smart Contract (solidity).
├── scripts              # Script that deploy the smart contract to (Goerli) Testnet (JavaScript).
├── test                 # All the test cases that test the Smart Contract in Local Machine (Hardhat/JavaScript).
├── hardhat.config.js    # Package, Dependency and Test Network setup.
├── package.json

```

## Features ✨

Below I explain all the features I added to the front-end + what I used to build it.

![Screenshot (33)](https://user-images.githubusercontent.com/75040026/221435111-7eec6934-591b-4551-a10f-34126b4b6c88.png)

- This page was designed randomly using (React, html, CSS, Material UI).

### Transaction

I have tested on the Goerli network. From the preview you can see the Dapp will transfer ether from the wallet ([MetaMask](https://github.com/MetaMask)). As the Blochain was slow it took some time for transactions. When the transaction is successful it will show the success status. And also from the contract we will fetch the transaction history and show it in a table.


![Screenshot (34)](https://user-images.githubusercontent.com/75040026/221434937-6883e414-319d-4f7f-85e0-21c64c58d350.png)

![Screenshot (35)](https://user-images.githubusercontent.com/75040026/221434954-21f7e813-9962-4388-9459-5de62ec9c7c0.png)

![Screenshot (36)](https://user-images.githubusercontent.com/75040026/221434960-1152ac56-b3d1-4eb5-bc0a-cbbf0877ca8e.png)

![Screenshot (37)](https://user-images.githubusercontent.com/75040026/221434870-7db7f99f-9ee4-410d-8ede-8f1fa725fdeb.png)



