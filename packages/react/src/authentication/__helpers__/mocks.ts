import { Profile } from '@digiv3rse/api-bindings';
import { mockProfileFragment } from '@digiv3rse/api-bindings/mocks';
import { EvmAddress } from '@digiv3rse/shared-kernel';
import { mockEvmAddress } from '@digiv3rse/shared-kernel/mocks';

import { ProfileSession, SessionType, WalletOnlySession } from '../useSession';

export function mockProfileSession({
  profile = mockProfileFragment(),
}: { profile?: Profile } = {}): ProfileSession {
  return {
    type: SessionType.WithProfile,
    authenticated: true,
    address: profile.ownedBy.address,
    profile,
  };
}

export function mockWalletOnlySession({
  address = mockEvmAddress(),
}: {
  address?: EvmAddress;
} = {}): WalletOnlySession {
  return {
    type: SessionType.JustWallet,
    authenticated: true,
    address,
  };
}
