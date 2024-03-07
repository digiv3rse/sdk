/*
 * @jest-environment node
 */
import {
  DiGiProfileManagerRelayErrorReasonType,
  SafeApolloClient,
} from '@digiv3rse/api-bindings';
import {
  mockCreateOnchainPostTypedDataData,
  mockCreateOnchainPostTypedDataResponse,
  mockDiGiApolloClient,
  mockDiGiProfileManagerRelayError,
  mockPostOnchainResponse,
  mockRelaySuccessFragment,
} from '@digiv3rse/api-bindings/mocks';
import { NativeTransaction } from '@digiv3rse/domain/entities';
import { mockCreatePostRequest, mockNonce, mockWallet } from '@digiv3rse/domain/mocks';
import {
  BroadcastingError,
  BroadcastingErrorReason,
} from '@digiv3rse/domain/use-cases/transactions';
import { ChainType } from '@digiv3rse/shared-kernel';
import { providers } from 'ethers';
import { mock } from 'jest-mock-extended';

import { RequiredConfig } from '../../../../config';
import { UnsignedProtocolCall } from '../../../../wallet/adapters/ConcreteWallet';
import { mockIProviderFactory } from '../../../../wallet/adapters/__helpers__/mocks';
import { UnsignedContractCallTransaction } from '../../AbstractContractCallGateway';
import {
  assertBroadcastingErrorWithReason,
  assertUnsignedProtocolCallCorrectness,
} from '../../__helpers__/assertions';
import { mockITransactionFactory, mockJsonRpcProvider } from '../../__helpers__/mocks';
import { CreateOnChainPostGateway } from '../CreateOnChainPostGateway';
import { mockOnchainPostRequest } from '../__helpers__/mocks';

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

  const gateway = new CreateOnChainPostGateway(
    config,
    providerFactory,
    apolloClient,
    transactionFactory,
  );

  return { gateway };
}

describe(`Given an instance of ${CreateOnChainPostGateway.name}`, () => {
  const request = mockCreatePostRequest();
  const onchainPostRequest = mockOnchainPostRequest(request);
  const data = mockCreateOnchainPostTypedDataData();

  describe(`when creating an IUnsignedProtocolCall<CreatePostRequest>`, () => {
    it(`should create an instance of the ${UnsignedProtocolCall.name} with the expected typed data`, async () => {
      const apolloClient = mockDiGiApolloClient([
        mockCreateOnchainPostTypedDataResponse({
          variables: {
            request: onchainPostRequest,
          },
          data,
        }),
      ]);
      const { gateway } = setupTestScenario({ apolloClient });

      const unsignedCall = await gateway.createUnsignedProtocolCall(request);

      assertUnsignedProtocolCallCorrectness(unsignedCall, data.result);
    });

    it(`should allow to override the signature nonce`, async () => {
      const nonce = mockNonce();
      const apolloClient = mockDiGiApolloClient([
        mockCreateOnchainPostTypedDataResponse({
          variables: {
            request: onchainPostRequest,
            options: {
              overrideSigNonce: nonce,
            },
          },
          data: mockCreateOnchainPostTypedDataData({ nonce }),
        }),
      ]);
      const { gateway } = setupTestScenario({ apolloClient });

      const unsignedCall = await gateway.createUnsignedProtocolCall(request, nonce);

      expect(unsignedCall.nonce).toEqual(nonce);
    });
  });

  describe(`when creating an UnsignedTransaction<CreatePostRequest>`, () => {
    const wallet = mockWallet();

    it(`should resolve with the expected ${UnsignedContractCallTransaction.name}`, async () => {
      const provider = await mockJsonRpcProvider();
      const apolloClient = mockDiGiApolloClient([
        mockCreateOnchainPostTypedDataResponse({
          variables: {
            request: onchainPostRequest,
          },
          data,
        }),
      ]);
      const { gateway } = setupTestScenario({ apolloClient, provider });

      const unsignedTransaction = await gateway.createUnsignedTransaction(request, wallet);

      expect(unsignedTransaction).toBeInstanceOf(UnsignedContractCallTransaction);
    });
  });

  describe(`when creating a ${NativeTransaction.name}<CreatePostRequest>`, () => {
    it(`should create an instance of the ${NativeTransaction.name}`, async () => {
      const apolloClient = mockDiGiApolloClient([
        mockPostOnchainResponse({
          variables: {
            request: onchainPostRequest,
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
          chainType: ChainType.POLYGON,
          id: expect.any(String),
          request,
        }),
      );
    });

    it.each([
      {
        relayError: mockDiGiProfileManagerRelayError(
          DiGiProfileManagerRelayErrorReasonType.AppNotAllowed,
        ),
        reason: BroadcastingErrorReason.APP_NOT_ALLOWED,
      },
      {
        relayError: mockDiGiProfileManagerRelayError(
          DiGiProfileManagerRelayErrorReasonType.NoDiGiManagerEnabled,
        ),
        reason: BroadcastingErrorReason.NO_DIGI_MANAGER_ENABLED,
      },
      {
        relayError: mockDiGiProfileManagerRelayError(
          DiGiProfileManagerRelayErrorReasonType.NotSponsored,
        ),
        reason: BroadcastingErrorReason.NOT_SPONSORED,
      },
      {
        relayError: mockDiGiProfileManagerRelayError(
          DiGiProfileManagerRelayErrorReasonType.RateLimited,
        ),
        reason: BroadcastingErrorReason.RATE_LIMITED,
      },
      {
        relayError: mockDiGiProfileManagerRelayError(DiGiProfileManagerRelayErrorReasonType.Failed),
        reason: BroadcastingErrorReason.UNKNOWN,
      },
    ])(
      `should fail w/ a ${BroadcastingError.name} with $reason in case of $relayError.__typename response with "$relayError.reason" reason`,
      async ({ relayError, reason }) => {
        const apolloClient = mockDiGiApolloClient([
          mockPostOnchainResponse({
            variables: {
              request: onchainPostRequest,
            },
            data: {
              result: relayError,
            },
          }),
          mockCreateOnchainPostTypedDataResponse({
            variables: {
              request: onchainPostRequest,
            },
            data,
          }),
        ]);

        const { gateway } = setupTestScenario({ apolloClient });
        const result = await gateway.createDelegatedTransaction(request);

        assertBroadcastingErrorWithReason(result, reason);
      },
    );
  });
});
