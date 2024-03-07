import { EvmAddress } from '@digiv3rse/shared-kernel';
import { ProfileId } from "./Profile.js";
export type Credentials = {
    readonly address: EvmAddress;
    readonly profileId?: ProfileId;
};
