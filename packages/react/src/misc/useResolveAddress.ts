import {
  HandleToAddressRequest,
  UnspecifiedError,
  useHandleToAddressLazyQuery,
} from '@digiv3rse/api-bindings';
import {
  EvmAddress,
  PromiseResult,
  failure,
  invariant,
  success,
} from '@digiv3rse/shared-kernel';

import { useDiGiApolloClient } from '../helpers/arguments';
import { UseDeferredTask, useDeferredTask } from '../helpers/tasks';

/**
 * `useResolveAddress` is a hook that resolves n EVM address from a DiGi Handle.
 *
 * This hook will not execute until the returned function is called.
 *
 * @example
 * ```ts
 * const { called,  error, loading, execute } = useResolveAddress();
 * ```
 *
 * Simple example:
 * ```ts
 * const { called, error, loading, execute } = useResolveAddress();
 *
 * const callback = async () => {
 *   const address = await execute({ handle: 'digi/wagmi' });
 *
 *   console.log(address);
 * }
 * ```
 *
 * @experimental This hook is experimental and may change in the future.
 * @category Handle
 * @group Hooks
 */
export function useResolveAddress(): UseDeferredTask<
  EvmAddress | null,
  UnspecifiedError,
  HandleToAddressRequest
> {
  const [fetch] = useHandleToAddressLazyQuery(useDiGiApolloClient());

  return useDeferredTask(async (request): PromiseResult<EvmAddress | null, UnspecifiedError> => {
    const { data, error } = await fetch({ variables: { request } });

    if (error) {
      return failure(new UnspecifiedError(error));
    }

    invariant(data, 'Data must be defined');

    return success(data.result);
  });
}
