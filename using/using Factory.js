import { ethers } from "ethers";
import { network } from "hardhat";

const provider = network.provider;

const privateKey = '0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80'
const wallet = new ethers.Wallet(privateKey, provider)  

const abi_ERC7527Factory = [
    "function deployWrap(AgencySettings, AppSettings, bytes)external returns (address, address)"
]
const ERC7527FactoryAddr = '0x5FbDB2315678afecb367f032d93F642f64180aa3'

const ERC7527FactoryContract = new ethers.Contract(ERC7527FactoryAddr,abi_ERC7527Factory,wallet)

const main = async () => {
    const AgencySettings = ['0x5FbDB2315678afecb367f032d93F642f64180aa3',['0',ethers.parseEther('0.1'),'1','10','10'],'','']
    const AppSettings = []
    const {agency,app} = await ERC7527FactoryContract.deployWrap(AgencySettings,AppSettings);
    console.log(agency,app);
}
main()