import {
  InvitedResult,
  useInvitedProfiles as useInvitedProfilesHook,
} from '@digiv3rse/api-bindings';
import { invariant } from '@digiv3rse/shared-kernel';

import { useSession } from '../authentication';
import { useDiGiApolloClient } from '../helpers/arguments';
import { ReadResult, useReadResult } from '../helpers/reads';
import { useFragmentVariables } from '../helpers/variables';

/**
 * Fetch all invited profiles.
 *
 * You MUST be authenticated via {@link useLogin} to use this hook.
 *
 * @example
 * ```tsx
 * const { data, error, loading } = useInvitedProfiles();
 * ```
 *
 * @category Misc
 * @group Hooks
 */
export function useInvitedProfiles(): ReadResult<InvitedResult[]> {
  const { data: session } = useSession();

  invariant(
    session?.authenticated,
    'You must be authenticated to use this query. Use `useLogin` hook to authenticate.',
  );

  return useReadResult(
    useInvitedProfilesHook(useDiGiApolloClient({ variables: useFragmentVariables() })),
  );
}
