require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  networks: {
    hardhat: {
      chainId: 31337
    },
  },
  solidity: {
    version: "0.8.20",
    settings: {
      optimizer: {
        enabled:true,
        runs: 1
      },
      evmVersion: "constantinople"
    }
  }
};
/**
 * Account #0: 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266 (10000 ETH)
Private Key: 0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80
 network.provider
 */