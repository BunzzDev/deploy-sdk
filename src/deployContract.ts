import { TransactionResponse } from '@ethersproject/abstract-provider';
import { Signer, ContractFactory, Contract } from 'ethers';

export type ModuleTemplate = {
  abi: string;
  bytecode: string;
}

export const deployContract = async (
  artifact: ModuleTemplate,
  signer: Signer,
  args?: unknown[],
): Promise<TransactionResponse> => {
  if (!signer.getAddress || signer.getAddress() === undefined) throw new Error('Signer is not connected.');

  console.log(artifact.abi)
  console.log(artifact.bytecode)
  const factory = new ContractFactory(artifact.abi, artifact.bytecode, signer);

  let contract: Contract;
  if (args?.length === 0) {
    contract = await factory.deploy();
  } else {
    contract = await factory.deploy(...args);
  }

  return contract.deployTransaction;
};
