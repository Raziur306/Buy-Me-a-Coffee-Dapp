const hre = require("hardhat");

async function main() {

  const Coffee = await hre.ethers.getContractFactory("Coffee");
  const contract = await Coffee.deploy();

  await contract.deployed();
  console.log("Address of contract: ", contract.address);

}



main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});


//deployed contract address
//0x124d56Dd049a78AD9826aB6AD93BF03AC638e43C