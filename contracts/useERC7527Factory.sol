// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;
import {IERC7527Factory, AgencySettings, AppSettings} from "./src/interfaces/IERC7527Factory.sol";
import {ERC7527Factory} from "./src/ERC7527.sol";
contract useERC7527Factory{ 
    address public appInstance;
    address public agencyInstance;
    function useDeployWrap(
        address ERC7527FactoryAddr,
        AgencySettings calldata agencySettings, 
        AppSettings calldata appSettings,
        bytes calldata
        ) external { 
        IERC7527Factory _ERC7527Fac = IERC7527Factory(ERC7527FactoryAddr); 
        (appInstance,agencyInstance)=_ERC7527Fac.deployWrap( agencySettings,appSettings,"");
    }
}