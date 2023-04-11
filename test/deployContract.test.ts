import { deployContract, ModuleTemplate } from '../src/deployContract';
import { expect } from "chai";
import { ethers as hardhat } from "hardhat";

import erc20 from './erc20.json';

describe('deployContract', () => {
  it('should be defined', () => {
    expect(deployContract).not.to.be.undefined;
  });

  it('should deploy a contract in success', async () => {
    const signers = await hardhat.getSigners();
    const args = ["test", "TEST"];
    try {
      const tx = await deployContract((erc20 as unknown) as ModuleTemplate, signers[0], args);
      const receipt = await tx.wait();
      expect(receipt).to.exist;
    } catch (err) {
      console.log(err.message)
      expect(err).not.to.exist;
    }
  });

  it('should throw an error from ethers when args is not given', async () => {
    const signers = await hardhat.getSigners();
    try {
      const tx = await deployContract((erc20 as unknown) as ModuleTemplate, signers[0]);
      const receipt = await tx.wait();
      expect(receipt).not.to.exist;
    } catch (err) {
      expect(err).to.exist;
    }
  });

  it('should throw an error from ethers when the lengs of args is longer', async () => {
    const signers = await hardhat.getSigners();
    const args = ["test", "TEST", "dummy"];
    try {
      const tx = await deployContract((erc20 as unknown) as ModuleTemplate, signers[0], args);
      const receipt = await tx.wait();
      expect(receipt).not.to.exist;
    } catch (err) {
      expect(err).to.exist;
    }
  });

  it('should throw an error from ethers when the lengs of args is shorter', async () => {
    const signers = await hardhat.getSigners();
    const args = ["test"];
    try {
      const tx = await deployContract((erc20 as unknown) as ModuleTemplate, signers[0], args);
      const receipt = await tx.wait();
      expect(receipt).not.to.exist;
    } catch (err) {
      expect(err).to.exist;
    }
  });

  it("should throw an error when signer doesn't have getAddress() function", async () => {
    try {
      const dummy: any = {}
      const tx = await deployContract((erc20 as unknown) as ModuleTemplate, dummy);
      expect(tx).not.to.exist;
    } catch (err) {
      expect(err.toString()).to.equal('Error: Signer is not connected.');
    }
  });

  it("should throw an error when signer can't get address", async () => {
    try {
      const dummy: any = {
        getAddress: () => undefined
      }
      const tx = await deployContract((erc20 as unknown) as ModuleTemplate, dummy);
      expect(tx).not.to.exist;
    } catch (err) {
      expect(err.toString()).to.equal('Error: Signer is not connected.');
    }
  });
});
