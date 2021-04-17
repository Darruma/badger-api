import { Inject, Service } from '@tsed/common';
import { NotFound } from '@tsed/exceptions';
import { ethers } from 'ethers';
import { S3Service } from '../aws/S3Service';
import { CacheService } from '../cache/CacheService';
import { BOUNCER_PROOFS, REWARD_DATA } from '../config/constants';
import {
  AirdropMerkleClaim,
  AirdropMerkleDistribution,
  RewardMerkleClaim,
  RewardMerkleDistribution,
} from '../interface/MerkleDistribution';
import { Eligibility } from './interfaces/eligibility.interface';

@Service()
export class RewardsService {
  @Inject()
  s3Service!: S3Service;
  @Inject()
  cacheService!: CacheService;

  /**
   * Get airdrop merkle claim for a user.
   * @param airdrop Airdrop JSON filename.
   * @param address User Ethereum address.
   */
  async getUserAirdrop(airdrop: string, address: string): Promise<AirdropMerkleClaim> {
    const airdropFile = await this.s3Service.getObject(REWARD_DATA, airdrop);
    const fileContents: AirdropMerkleDistribution = JSON.parse(airdropFile.toString('utf-8'));
    const claim = fileContents.claims[address.toLowerCase()];
    if (!claim) {
      throw new NotFound(`${address} does not qualify for airdrop`);
    }
    return claim;
  }

  /**
   * Get airdrop merkle claim for a user.
   * @param airdrop Airdrop JSON filename.
   * @param address User Ethereum address.
   */
  async getBouncerProof(address: string): Promise<AirdropMerkleClaim> {
    const airdropFile = await this.s3Service.getObject(REWARD_DATA, BOUNCER_PROOFS);
    const fileContents: AirdropMerkleDistribution = JSON.parse(airdropFile.toString('utf-8'));
    const claim = fileContents.claims[ethers.utils.getAddress(address)];
    if (!claim) {
      throw new NotFound(`${address} is not on the bouncer list`);
    }
    return claim;
  }

  /**
   * Get badger tree reward merkle claim for a user.
   * @param address User Ethereum address.
   */
  async getUserRewards(address: string): Promise<RewardMerkleClaim> {
    const rewardFile = await this.s3Service.getObject(REWARD_DATA, 'badger-tree.json');
    const fileContents: RewardMerkleDistribution = JSON.parse(rewardFile.toString('utf-8'));
    const claim = fileContents.claims[address];
    if (!claim) {
      throw new NotFound(`${address} does not have claimable rewards.`);
    }
    return claim;
  }

  /**
   * Get badger shop eligibility for a user.
   * Returns 200 on eligible, 403 on not eligible.
   * @param address User Ethereum address.
   */
  async checkBouncerList(address: string): Promise<Eligibility> {
    let eligible = false;
    try {
      await this.getBouncerProof(address);
      eligible = true;
    } catch (err) {} // not found, not eligible
    return {
      isEligible: eligible,
    };
  }
}
