import { LogoutReason } from '@digiv3rse/domain/use-cases/authentication';
import { success } from '@digiv3rse/shared-kernel';

import { useSharedDependencies } from '../../shared';

export function useLogoutController() {
  const { logout } = useSharedDependencies();

  return async () => {
    await logout.execute(LogoutReason.USER_INITIATED);
    return success();
  };
}
