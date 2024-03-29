import { MockedResponse } from '@apollo/client/testing';
import { faker } from '@faker-js/faker';
import { mockTransactionHash } from '@digiv3rse/domain/mocks';

import {
  BroadcastOnchainData,
  BroadcastOnchainDocument,
  BroadcastOnchainVariables,
  BroadcastOnMomokaData,
  BroadcastOnMomokaDocument,
  BroadcastOnMomokaVariables,
  CreateMomokaPublicationResult,
  DiGiProfileManagerRelayError,
  DiGiProfileManagerRelayErrorReasonType,
  RelayError,
  RelayErrorReasonType,
  RelaySuccess,
} from '../../graphql/generated';

function mockBroadcastOnchainData(result: RelaySuccess | RelayError): BroadcastOnchainData {
  return {
    result,
  };
}

export function mockBroadcastOnchainResponse({
  result,
  variables,
}: {
  result: RelaySuccess | RelayError;
  variables: BroadcastOnchainVariables;
}): MockedResponse<BroadcastOnchainData> {
  return {
    request: {
      query: BroadcastOnchainDocument,
      variables: variables,
    },
    result: {
      data: mockBroadcastOnchainData(result),
    },
  };
}

export function mockRelaySuccessFragment(txHash: string = mockTransactionHash()): RelaySuccess {
  return {
    __typename: 'RelaySuccess',
    txHash,
    txId: faker.datatype.uuid(),
  };
}

export function mockRelayErrorFragment(reason: RelayErrorReasonType): RelayError {
  return {
    __typename: 'RelayError',
    reason,
  };
}

export function mockDiGiProfileManagerRelayError(
  reason: DiGiProfileManagerRelayErrorReasonType,
): DiGiProfileManagerRelayError {
  return {
    __typename: 'DiGiProfileManagerRelayError',
    reason,
  };
}

export function mockBroadcastOnMomokaResponse<V extends BroadcastOnMomokaVariables>({
  variables,
  result,
}: {
  variables: V;
  result: CreateMomokaPublicationResult | RelayError;
}): MockedResponse<BroadcastOnMomokaData, V> {
  return {
    request: {
      query: BroadcastOnMomokaDocument,
      variables,
    },
    result: {
      data: { result },
    },
  };
}
