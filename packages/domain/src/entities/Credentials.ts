import { EvmAddress } from '@digiv3rse/shared-kernel';

import { ProfileId } from './Profile';

export type Credentials = {
  readonly address: EvmAddress;
  readonly profileId?: ProfileId;
};
