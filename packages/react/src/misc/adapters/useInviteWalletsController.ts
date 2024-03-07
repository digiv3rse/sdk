import {
  InviteWallets,
  InviteWalletsRequest,
  WalletAlreadyInvitedError,
} from '@digiv3rse/domain/use-cases/wallets';
import { PromiseResult } from '@digiv3rse/shared-kernel';

import { useSharedDependencies } from '../../shared';
import { InviteWalletsGateway } from './InviteWalletsGateway';
import { InviteWalletsPresenter } from './InviteWalletsPresenter';

export function useInviteWalletsController() {
  const { apolloClient, profileCacheManager } = useSharedDependencies();

  return async (request: InviteWalletsRequest): PromiseResult<void, WalletAlreadyInvitedError> => {
    const presenter = new InviteWalletsPresenter(apolloClient, profileCacheManager);
    const gateway = new InviteWalletsGateway(apolloClient);
    const inviteWallets = new InviteWallets(gateway, gateway, presenter);

    await inviteWallets.invite(request);

    return presenter.asResult();
  };
}
