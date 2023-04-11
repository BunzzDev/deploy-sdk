# Bunzz Deploy SDK

## NOTE
The Bunzz Deploy SDK is still in beta.
The behavior depends on the API server and might be changed without backward compatibility.  

## Overview
[Bunzz](https://bunzz.dev) is a DApp development platform to make smart contract development easy. Bunzz has a "smart contract hub" function as a registry/library of smart contracts like Docker Hub.  

The Bunzz Deploy SDK is a set of tools to allow end-users of your DApp to clone smart contracts by user action.  
With the SDK, developers can easily integrate the cloning functionality provided by Bunzz's smart contract hub, eliminating the need to develop and maintain their own cloning function.  

Many DApps, including no-code web3 tools like DAO platforms, protocols like Uniswap, and NFT marketplaces that allow users to create their own NFT projects, require deploying smart contracts.  
However, implementing this functionality can be a time-consuming and error-prone task for developers.  

With the Bunzz Deploy SDK, developers can quickly and easily integrate the cloning functionality into their DApps, allowing users to clone smart contracts with a simple user action.  
This can greatly simplify the development process, reduce the risk of errors, and speed up time to market.  

## Features
- Simplified contract cloning with a simple user action
- Integration with Bunzz's smart contract hub
- Reduces development time and risk of errors

## Getting Started

### installation
```
npm install @bunzz/deploy-sdk ethers@^5.7.0
```
**NOTE: For now, `@bunzz/deploy-sdk` is not supporting ethes ver 6.x.x**

### 
1. Find an appropriate smart contract module from the [explorer](https://app.bunzz.dev/explorer).
2. If you couldn't find a good one, you can upload your own smart contract module from the [repository page](https://app.bunzz.dev/repository). (It requires signing up)
To get started with the Bunzz SDK, follow the installation and setup instructions in the documentation. Once set up, you can integrate the SDK into your DApp to enable contract cloning.
3. Copy the module template ID from the module template page.
4. You can easily implement a deploy function with the SDK. :rocket
```
import { deploy } from '@bunzz/deploy-sdk';
import { providers } from 'ethers';

const TEMPLATE_ID = '<TEMPLATE_ID>';

const cloneContract = async () => {
  // get an ethers' style Signer.
  const signer = getSigner();

  // Arguments for the constructor as an array.
  // The types must follow the ethers style.
  const arg = ['dummy', 123456];

  // The return value is the same as the ethers one.
  const tx = await deploy(TEMPLATE_ID, signer, args);

  // You can get receipt as well.
  const receipt = await tx.wait();
  
  return receipt;
};

const getSigner = () => {
  // Here is an example of Metamask.
  const provider = new providers.Web3Provider(window.ethereum);
  return provider.getSigner();
};

```


## License
The Bunzz SDK is released under the [MIT License].
