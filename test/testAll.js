const { expect } = require("chai");
const hre = require("hardhat");
const { ethers } = require("hardhat")
const {
  loadFixture,
  time,
} = require("@nomicfoundation/hardhat-toolbox/network-helpers");

describe("Factory",function(){
    async function deployFactory(){
        // const erc7527Factory = await ethers.deployContract("ERC7527Factory");
        
        const ERC7527Factory = await ethers.getContractFactory("ERC7527Factory");
        const erc7527Factory = await ERC7527Factory.deploy();

        //   
        const ERC7527Agency = await ethers.getContractFactory("ERC7527Agency");
        const erc7527Agency = await ERC7527Agency.deploy();
        //   
        const ERC7527App = await ethers.getContractFactory("ERC7527App");
        const erc7527App = await ERC7527App.deploy();

        // 
        const UseERC7527Factory = await ethers.getContractFactory("useERC7527Factory",{
            value:ethers.parseEther("10"), 
        });
        const useERC7527Factory = await UseERC7527Factory.deploy();

        return {erc7527Factory,erc7527Agency,erc7527App,useERC7527Factory};
        
    }
    it("use deployWrap, wrap , unwrap", async function(){
        const {erc7527Factory,erc7527Agency,erc7527App,useERC7527Factory} = await loadFixture(deployFactory)
        
        console.log("erc7527Factory Address is   "+erc7527Factory.target);//0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0
        console.log("erc7527Agency Address is    "+erc7527Agency.target);//0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9
        console.log("erc7527App Address is       "+erc7527App.target);//0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9
        const bytesData = ethers.encodeBytes32String("")
        const AgencySettings = [erc7527Agency.target,
        ['0x0000000000000000000000000000000000000000',ethers.parseEther('0.1'),erc7527Agency.target,'10','10'],
        '0x',
        '0x'
        ]
        const AppSettings = [erc7527App.target,'0x','0x']
        await useERC7527Factory.useDeployWrap(erc7527Factory.target,AgencySettings,AppSettings,'0x');
        const appInstance  = await useERC7527Factory.appInstance();
        const agencyInstance  = await useERC7527Factory.agencyInstance();

        console.log("appInstance Address is     " + appInstance);
        console.log("agencyInstance Address is  " + agencyInstance);

        const [owner, otherAccount] = await ethers.getSigners();

        await useERC7527Factory.testWarp();
        const warpReturn = await useERC7527Factory.warpReturn();
        console.log(warpReturn);

        // 
        await useERC7527Factory.testUnwarp();
        const unwarpReturn = await useERC7527Factory.unwarpReturn();
        console.log(unwarpReturn);
    })
})