import { BadRequest } from '@tsed/exceptions';
import { ethers } from 'ethers';
import { bscTokensConfig } from './config/bsc-tokens.config';
import { ethTokensConfig } from './config/eth-tokens.config';
import { Token } from './interfaces/token.interface';

export const protocolTokens = { ...ethTokensConfig, ...bscTokensConfig };

export const getToken = (contract: string): Token => {
  const checksummedAddress = ethers.utils.getAddress(contract);
  const token = protocolTokens[checksummedAddress];
  if (!token) {
    throw new BadRequest(`${contract} not supported`);
  }
  return token;
};