import { Signer } from 'ethers';
import { TransactionResponse } from '@ethersproject/abstract-provider';
export declare const deploy: (moduleTemplateId: string, signer: Signer, args?: unknown[]) => Promise<TransactionResponse>;
