import { ProfileId } from '@digiv3rse/domain/entities';
import { UseDeferredTask } from "../helpers/tasks.js";
export type UseDismissRecommendedProfilesArgs = {
    profileIds: ProfileId[];
};
/**
 * Dismiss profiles from the recommended list.
 *
 * You MUST be authenticated via {@link useLogin} to use this hook.
 *
 * @example
 * ```tsx
 * const { execute: dismiss, loading } = useDismissRecommendedProfiles();
 *
 * // ...
 *
 * <button onClick={() => dismiss({ profileIds: [profile.id] })} disabled={loading}>
 *   Dismiss recommendation
 * </button>
 * ```
 *
 * @category Discovery
 * @group Hooks
 */
export declare function useDismissRecommendedProfiles(): UseDeferredTask<void, never, UseDismissRecommendedProfilesArgs>;
