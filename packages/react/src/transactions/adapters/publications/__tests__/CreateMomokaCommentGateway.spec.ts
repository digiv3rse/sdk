import {
  DiGiProfileManagerRelayErrorReasonType,
  SafeApolloClient,
} from '@digiv3rse/api-bindings';
import {
  mockCommentOnMomokaResponse,
  mockCreateMomokaCommentTypedDataData,
  mockCreateMomokaCommentTypedDataResponse,
  mockCreateMomokaPublicationResult,
  mockDiGiApolloClient,
  mockDiGiProfileManagerRelayError,
} from '@digiv3rse/api-bindings/mocks';
import { DataTransaction } from '@digiv3rse/domain/entities';
import { mockCreateCommentRequest } from '@digiv3rse/domain/mocks';
import {
  BroadcastingError,
  BroadcastingErrorReason,
} from '@digiv3rse/domain/use-cases/transactions';

import { UnsignedProtocolCall } from '../../../../wallet/adapters/ConcreteWallet';
import {
  assertBroadcastingErrorWithReason,
  assertUnsignedProtocolCallCorrectness,
} from '../../__helpers__/assertions';
import { mockITransactionFactory } from '../../__helpers__/mocks';
import { CreateMomokaCommentGateway } from '../CreateMomokaCommentGateway';
import { mockMomokaCommentRequest } from '../__helpers__/mocks';

function setupTestScenario({ apolloClient }: { apolloClient: SafeApolloClient }) {
  const transactionFactory = mockITransactionFactory();

  const gateway = new CreateMomokaCommentGateway(apolloClient, transactionFactory);

  return { gateway };
}

describe(`Given an instance of ${CreateMomokaCommentGateway.name}`, () => {
  const request = mockCreateCommentRequest();
  const momokaCommentRequest = mockMomokaCommentRequest(request);
  const data = mockCreateMomokaCommentTypedDataData();

  describe(`when creating an IUnsignedProtocolCall<CreateCommentRequest>`, () => {
    it(`should:
        - use the IMetadataUploader<CreateCommentRequest'> to upload the publication metadata
        - create an instance of the ${UnsignedProtocolCall.name} with the expected typed data`, async () => {
      const apolloClient = mockDiGiApolloClient([
        mockCreateMomokaCommentTypedDataResponse({
          variables: {
            request: momokaCommentRequest,
          },
          data,
        }),
      ]);

      const { gateway } = setupTestScenario({ apolloClient });

      const unsignedCall = await gateway.createUnsignedProtocolCall(request);

      assertUnsignedProtocolCallCorrectness(unsignedCall, data.result);
    });
  });

  describe(`when creating a ${DataTransaction.name}<CreateCommentRequest>`, () => {
    it(`should create an instance of the ${DataTransaction.name}`, async () => {
      const apolloClient = mockDiGiApolloClient([
        mockCommentOnMomokaResponse({
          variables: {
            request: momokaCommentRequest,
          },
          data: {
            result: mockCreateMomokaPublicationResult(),
          },
        }),
      ]);
      const { gateway } = setupTestScenario({ apolloClient });

      const result = await gateway.createDelegatedTransaction(request);

      expect(result.unwrap()).toBeInstanceOf(DataTransaction);
      expect(result.unwrap()).toEqual(
        expect.objectContaining({
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
          mockCommentOnMomokaResponse({
            variables: {
              request: momokaCommentRequest,
            },
            data: {
              result: relayError,
            },
          }),
          mockCreateMomokaCommentTypedDataResponse({
            variables: {
              request: momokaCommentRequest,
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
