import { PlatformTest } from '@tsed/common';

import * as s3Utils from '../aws/s3.utils';
import { TOKENS } from '../config/tokens.config';
import { MOCK_BOUNCER_FILE } from '../test/constants';
import { TEST_ADDR, TEST_CHAIN } from '../test/tests.utils';
import { ProofsService } from './proofs.service';

describe('proofs.service', () => {
  let service: ProofsService;

  beforeAll(async () => {
    await PlatformTest.create();
    service = PlatformTest.get<ProofsService>(ProofsService);
  });

  afterEach(PlatformTest.reset);

  describe('getBouncerProof', () => {
    it('throws a 404 when a chain is missing a bouncer file', async () => {
      jest.spyOn(s3Utils, 'getObject').mockImplementation();
      await expect(service.getBouncerProof(TEST_CHAIN, TEST_ADDR)).rejects.toThrow(
        `${TEST_CHAIN.name} does not have requested data`,
      );
    });

    it('throws a 404 when a chain is missing an entry for the user in the bouncer file', async () => {
      jest.spyOn(s3Utils, 'getObject').mockImplementation(async () => JSON.stringify(MOCK_BOUNCER_FILE));
      await expect(service.getBouncerProof(TEST_CHAIN, TOKENS.BADGER)).rejects.toThrow(
        `No data for specified address: ${TOKENS.BADGER}`,
      );
    });

    it('returns the user proof for a user on the bouncer list', async () => {
      jest.spyOn(s3Utils, 'getObject').mockImplementation(async () => JSON.stringify(MOCK_BOUNCER_FILE));
      const result = await service.getBouncerProof(TEST_CHAIN, TEST_ADDR);
      expect(result).toMatchSnapshot();
    });
  });
});
