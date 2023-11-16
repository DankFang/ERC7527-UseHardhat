
const hre = require("hardhat");

async function main() {



//   
  const erc7527Agency = await hre.ethers.deployContract("ERC7527Agency");

  await erc7527Agency.waitForDeployment();
//   
  const erc7527App = await hre.ethers.deployContract("ERC7527App");

  await erc7527App.waitForDeployment();
//   
  const erc7527Factory = await hre.ethers.deployContract("ERC7527Factory");

  await erc7527Factory.waitForDeployment();
  console.log(
    "ERC7527Factory address is:" + erc7527Factory.target // 0x5FbDB2315678afecb367f032d93F642f64180aa3 
   
  );
  console.log(
    "ERC7527App address is:" + erc7527App.target
  );
  console.log(
    "ERC7527Agency address is:" + erc7527Agency.target
  );
}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
