import {
  DiGiProfileManagerRelayError,
  DiGiProfileManagerRelayErrorReasonType,
  RelayError,
  RelayErrorReasonType,
} from '@digiv3rse/api-bindings';
import {
  BroadcastingError,
  BroadcastingErrorReason,
} from '@digiv3rse/domain/use-cases/transactions';
import { failure, Failure, InvariantError } from '@digiv3rse/shared-kernel';

export function handleRelayError(
  error: RelayError | DiGiProfileManagerRelayError,
  _?: unknown,
): Failure<BroadcastingError> {
  switch (error.reason) {
    case RelayErrorReasonType.AppNotAllowed:
    case DiGiProfileManagerRelayErrorReasonType.AppNotAllowed:
      return failure(
        new BroadcastingError(BroadcastingErrorReason.APP_NOT_ALLOWED, {
          details: 'See https://docs.digiv3rse.xyz/docs/gasless-and-signless#whitelisting-your-app',
        }),
      );

    case RelayErrorReasonType.RateLimited:
    case DiGiProfileManagerRelayErrorReasonType.RateLimited:
      return failure(new BroadcastingError(BroadcastingErrorReason.RATE_LIMITED));

    case RelayErrorReasonType.NotSponsored:
    case DiGiProfileManagerRelayErrorReasonType.NotSponsored:
      return failure(new BroadcastingError(BroadcastingErrorReason.NOT_SPONSORED));

    case RelayErrorReasonType.Failed:
    case DiGiProfileManagerRelayErrorReasonType.Failed:
      return failure(new BroadcastingError(BroadcastingErrorReason.UNKNOWN));

    case DiGiProfileManagerRelayErrorReasonType.NoDiGiManagerEnabled:
      return failure(new BroadcastingError(BroadcastingErrorReason.NO_DIGI_MANAGER_ENABLED));

    case DiGiProfileManagerRelayErrorReasonType.RequiresSignature:
      return failure(new BroadcastingError(BroadcastingErrorReason.REQUIRES_SIGNATURE));

    default:
      throw new InvariantError(`Unexpected relay error reason: ${error.reason}`);
  }
}
