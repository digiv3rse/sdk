import { MockedResponse } from '@apollo/client/testing';
import { mockTransactionHash } from '@digiv3rse/domain/mocks';
import { EvmAddress } from '@digiv3rse/shared-kernel';

import {
  GenerateDiGiApiRelayAddressDocument,
  DiGiTransactionResult,
  DiGiTransactionStatusData,
  DiGiTransactionStatusDocument,
  DiGiTransactionStatusRequest,
  DiGiTransactionStatusType,
} from '../../graphql/generated';

export function mockDiGiTransactionStatusDataResponse({
  request,
  result,
}: {
  request: DiGiTransactionStatusRequest;
  result: DiGiTransactionResult | null;
}): MockedResponse<DiGiTransactionStatusData> {
  return {
    request: {
      query: DiGiTransactionStatusDocument,
      variables: { request },
    },
    result: {
      data: { result },
    },
  };
}

export function mockDiGiTransactionResult(
  overrides?: Partial<DiGiTransactionResult>,
): DiGiTransactionResult {
  return {
    extraInfo: null,
    reason: null,
    status: DiGiTransactionStatusType.Processing,
    txHash: mockTransactionHash(),
    ...overrides,
    __typename: 'DiGiTransactionResult',
  };
}

export function mockGenerateDiGiAPIRelayAddressResponse({ address }: { address: EvmAddress }) {
  return {
    request: {
      query: GenerateDiGiApiRelayAddressDocument,
    },
    result: {
      data: { result: address },
    },
  };
}
