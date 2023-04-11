import { Signer } from 'ethers';
import { TransactionResponse } from '@ethersproject/abstract-provider';
import { deployContract } from './deployContract';
import { fetchModuleTemplate } from './fetchModuleTemplate';

export const deploy = async (moduleTemplateId: string, signer: Signer, args?: unknown[]): Promise<TransactionResponse> => {
  const { data: moduleTemplate } = await fetchModuleTemplate(moduleTemplateId);
  const tx = await deployContract(moduleTemplate, signer, args);
  return tx;
};
