import { ClaimableProfilesResult, useClaimableProfiles } from '@digiv3rse/api-bindings';
import { invariant } from '@digiv3rse/shared-kernel';

import { SessionType, useSession } from '../authentication';
import { useDiGiApolloClient } from '../helpers/arguments';
import { ReadResult, useReadResult } from '../helpers/reads';

export type { ClaimableProfilesResult, ReservedClaimable } from '@digiv3rse/api-bindings';

/**
 * `useCanClaimHandle` is React Hook that allows you to check if you can claim a handle.
 *
 * You MUST be authenticated with a {@link WalletOnlySession} via {@link useLogin} to use this hook.
 *
 * @experimental This hook is experimental and may change in future versions.
 * @category Wallet
 * @group Hooks
 */
export function useCanClaimHandle(): ReadResult<ClaimableProfilesResult> {
  const { data: session } = useSession();

  invariant(session?.authenticated, 'You must be authenticated.');
  invariant(
    session.type === SessionType.JustWallet,
    'You must be authenticated with a WalletOnlySession',
  );

  return useReadResult(
    useClaimableProfiles(
      useDiGiApolloClient({
        fetchPolicy: 'network-only',
      }),
    ),
  );
}
