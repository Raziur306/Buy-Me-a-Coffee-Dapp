require("@nomicfoundation/hardhat-toolbox");

require('dotenv').config();

/** @type import('hardhat/config').HardhatUserConfig */

const GORIL_URL = process.env.GORIL_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
  solidity: "0.8.17",
  networks:{
    goril:{
      url:GORIL_URL,
      accounts:[PRIVATE_KEY],
    },
  },
};
