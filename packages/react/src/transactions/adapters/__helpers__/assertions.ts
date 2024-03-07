import { omitTypename } from '@digiv3rse/api-bindings';
import { TypedData } from '@digiv3rse/blockchain-bindings';
import { ProtocolTransactionRequestModel } from '@digiv3rse/domain/entities';
import {
  BroadcastingError,
  BroadcastingErrorReason,
} from '@digiv3rse/domain/use-cases/transactions';
import { assertFailure, Result } from '@digiv3rse/shared-kernel';

import { UnsignedProtocolCall } from '../../../wallet/adapters/ConcreteWallet';

export function assertUnsignedProtocolCallCorrectness<T extends ProtocolTransactionRequestModel>(
  unsignedProtocolCall: UnsignedProtocolCall<T>,
  broadcastResult: {
    id: string;
    typedData: TypedData;
  },
) {
  expect(unsignedProtocolCall.id).toEqual(broadcastResult.id);
  expect(unsignedProtocolCall.typedData).toEqual(omitTypename(broadcastResult.typedData));
}

export function assertBroadcastingErrorWithReason(
  result: Result<unknown, BroadcastingError>,
  reason: BroadcastingErrorReason,
) {
  assertFailure(result);
  expect(result.error).toBeInstanceOf(BroadcastingError);
  expect(result.error.reason).toEqual(reason);
}
