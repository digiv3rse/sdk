/*
 * @jest-environment node
 */
import { SafeApolloClient } from '@digiv3rse/api-bindings';
import {
  mockCreateUnfollowTypedDataData,
  mockCreateUnfollowTypedDataResponse,
  mockDiGiApolloClient,
  mockRelaySuccessFragment,
  mockUnfollowResponse,
} from '@digiv3rse/api-bindings/mocks';
import { NativeTransaction, UnsignedTransaction } from '@digiv3rse/domain/entities';
import { mockUnfollowRequest, mockWallet } from '@digiv3rse/domain/mocks';
import { ChainType } from '@digiv3rse/shared-kernel';
import { providers } from 'ethers';
import { mock } from 'jest-mock-extended';

import { RequiredConfig } from '../../../../config';
import { UnsignedProtocolCall } from '../../../../wallet/adapters/ConcreteWallet';
import { mockIProviderFactory } from '../../../../wallet/adapters/__helpers__/mocks';
import { UnsignedContractCallTransaction } from '../../AbstractContractCallGateway';
import { assertUnsignedProtocolCallCorrectness } from '../../__helpers__/assertions';
import { mockITransactionFactory, mockJsonRpcProvider } from '../../__helpers__/mocks';
import { UnfollowProfileGateway } from '../UnfollowProfileGateway';

function setupTestScenario({
  apolloClient,
  provider = mock<providers.JsonRpcProvider>(),
}: {
  apolloClient: SafeApolloClient;
  provider?: providers.JsonRpcProvider;
}) {
  const config = mock<RequiredConfig>();
  const transactionFactory = mockITransactionFactory();
  const providerFactory = mockIProviderFactory({
    chainType: ChainType.POLYGON,
    provider,
  });

  const gateway = new UnfollowProfileGateway(
    config,
    providerFactory,
    apolloClient,
    transactionFactory,
  );

  return { gateway };
}

describe(`Given an instance of ${UnfollowProfileGateway.name}`, () => {
  const request = mockUnfollowRequest();

  describe(`when creating an ${UnsignedTransaction.name}<UnfollowRequest>`, () => {
    const wallet = mockWallet();
    const data = mockCreateUnfollowTypedDataData();

    it(`should resolve with the expected ${UnsignedContractCallTransaction.name}`, async () => {
      const provider = await mockJsonRpcProvider();
      const apolloClient = mockDiGiApolloClient([
        mockCreateUnfollowTypedDataResponse({
          variables: {
            request: {
              unfollow: [request.profileId],
            },
          },
          data,
        }),
      ]);
      const { gateway } = setupTestScenario({ apolloClient, provider });

      const unsignedTransaction = await gateway.createUnsignedTransaction(request, wallet);

      expect(unsignedTransaction).toBeInstanceOf(UnsignedContractCallTransaction);
    });
  });

  describe(`when creating an IUnsignedProtocolCall<UnfollowRequest>`, () => {
    it(`should create an instance of the ${UnsignedProtocolCall.name} with the expected typed data`, async () => {
      const data = mockCreateUnfollowTypedDataData();

      const apolloClient = mockDiGiApolloClient([
        mockCreateUnfollowTypedDataResponse({
          variables: {
            request: {
              unfollow: [request.profileId],
            },
          },
          data,
        }),
      ]);

      const { gateway } = setupTestScenario({ apolloClient });

      const unsignedCall = await gateway.createUnsignedProtocolCall(request);

      assertUnsignedProtocolCallCorrectness(unsignedCall, data.result);
    });
  });

  describe(`when creating a ${NativeTransaction.name}<UnfollowRequest>`, () => {
    it(`should create an instance of the ${NativeTransaction.name}`, async () => {
      const apolloClient = mockDiGiApolloClient([
        mockUnfollowResponse({
          variables: {
            request: {
              unfollow: [request.profileId],
            },
          },
          data: {
            result: mockRelaySuccessFragment(),
          },
        }),
      ]);
      const { gateway } = setupTestScenario({ apolloClient });

      const result = await gateway.createDelegatedTransaction(request);

      expect(result.unwrap()).toBeInstanceOf(NativeTransaction);
      expect(result.unwrap()).toEqual(
        expect.objectContaining({
          id: expect.any(String),
          request,
        }),
      );
    });
  });
});
