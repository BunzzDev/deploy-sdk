import { TransactionResponse } from '@ethersproject/abstract-provider';
import { Signer } from 'ethers';
export type ModuleTemplate = {
    abi: string;
    bytecode: string;
};
export declare const deployContract: (artifact: ModuleTemplate, signer: Signer, args?: unknown[]) => Promise<TransactionResponse>;
