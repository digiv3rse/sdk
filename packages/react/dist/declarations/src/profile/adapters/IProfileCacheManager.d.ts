import { Profile } from '@digiv3rse/api-bindings';
import { ProfileId } from '@digiv3rse/domain/entities';
export interface IProfileCacheManager {
    fetchProfileById(id: ProfileId): Promise<Profile | null>;
    fetchProfileByHandle(fullHandle: string): Promise<Profile | null>;
    refreshCurrentProfile(): Promise<void>;
}
