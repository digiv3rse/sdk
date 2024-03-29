import { Profile } from '@digiv3rse/api-bindings';
import { UpgradeCredentialsRequest } from '@digiv3rse/domain/use-cases/authentication';

import { UseDeferredTask, useDeferredTask } from '../helpers/tasks';
import { useUpgradeCredentialsController } from './adapters/useUpgradeCredentialsController';

export type { UpgradeCredentialsRequest };

/**
 * Upgrade credentials from "just wallet" to "with profile".
 *
 * @experimental This hook is experimental and may change in future versions.
 * @category Authentication
 * @group Hooks
 */
export function useUpgradeCredentials(): UseDeferredTask<
  Profile,
  Error,
  UpgradeCredentialsRequest
> {
  const upgrade = useUpgradeCredentialsController();
  return useDeferredTask(upgrade);
}
