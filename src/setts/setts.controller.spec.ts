import { PlatformTest } from '@tsed/common';
import { BadRequest } from '@tsed/exceptions';
import SuperTest from 'supertest';
import { uniformPerformance } from '../protocols/interfaces/performance.interface';
import { createValueSource, ValueSource } from '../protocols/interfaces/value-source.interface';
import * as protocolsUtils from '../protocols/protocols.utils';
import { Server } from '../Server';
import * as settsUtils from '../setts/setts.utils';
import { toTestBalance } from '../test/tests.utils';
import { TokenBalance } from '../tokens/interfaces/token-balance.interface';
import { TokenRequest } from '../tokens/interfaces/token-request.interface';
import { TokensService } from '../tokens/tokens.service';
import { getToken } from '../tokens/tokens.utils';
import { Sett } from './interfaces/sett.interface';
import { SettDefinition } from './interfaces/sett-definition.interface';

describe('SettsController', () => {
  let request: SuperTest.SuperTest<SuperTest.Test>;
  let tokensService: TokensService;

  beforeEach(PlatformTest.bootstrap(Server));
  beforeEach(async () => {
    request = SuperTest(PlatformTest.callback());
    tokensService = PlatformTest.get<TokensService>(TokensService);
  });

  afterEach(PlatformTest.reset);

  const setupTest = (): void => {
    jest
      .spyOn(settsUtils, 'getCachedSett')
      .mockImplementation(
        async (settDefinition: SettDefinition): Promise<Sett> => settsUtils.defaultSett(settDefinition),
      );
    jest.spyOn(protocolsUtils, 'getVaultValueSources').mockImplementation(
      async (_settDefinition: SettDefinition): Promise<ValueSource[]> => {
        const underlying = createValueSource(settsUtils.VAULT_SOURCE, uniformPerformance(13.53321));
        const badger = createValueSource('Badger Rewards', uniformPerformance(6.8775));
        const digg = createValueSource('Digg Rewards', uniformPerformance(1.2));
        const fees = createValueSource('Curve Trading Fees', uniformPerformance(1.33));
        return [underlying, badger, digg, fees];
      },
    );
    jest.spyOn(tokensService, 'getSettTokens').mockImplementation(
      async (request: TokenRequest): Promise<TokenBalance[]> => {
        const token = getToken(request.sett.depositToken);
        if (token.lpToken) {
          const bal0 = parseInt(token.address.slice(0, 4), 16);
          const bal1 = parseInt(token.address.slice(0, 6), 16);
          return Promise.all([toTestBalance(token, bal0), toTestBalance(token, bal1)]);
        }
        return Promise.all([toTestBalance(token, parseInt(token.address.slice(0, 4), 16))]);
      },
    );
  };

  describe('GET /v2/setts', () => {
    describe('with no specified chain', () => {
      it('returns eth setts', async (done: jest.DoneCallback) => {
        setupTest();
        const { body } = await request.get('/v2/setts').expect(200);
        expect(body).toMatchSnapshot();
        done();
      });
    });

    describe('with a specified chain', () => {
      it('returns the setts for eth', async (done: jest.DoneCallback) => {
        setupTest();
        const { body } = await request.get('/v2/setts?chain=eth').expect(200);
        expect(body).toMatchSnapshot();
        done();
      });

      it('returns the setts for bsc', async (done: jest.DoneCallback) => {
        setupTest();
        const { body } = await request.get('/v2/setts?chain=bsc').expect(200);
        expect(body).toMatchSnapshot();
        done();
      });
    });

    describe('with an invalid specified chain', () => {
      it('returns a 400', async (done: jest.DoneCallback) => {
        const { body } = await request.get('/v2/setts?chain=invalid').expect(BadRequest.STATUS);
        expect(body).toMatchSnapshot();
        done();
      });
    });
  });
});