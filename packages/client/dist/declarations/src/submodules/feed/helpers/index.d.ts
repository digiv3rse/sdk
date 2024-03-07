import { FollowPaidActionFragment, OpenActionPaidActionFragment } from "../graphql/feed.generated.js";
/**
 * Check if the result is a {@link FollowPaidActionFragment}.
 *
 * @param result - result to check
 * @returns true if the result is a {@link FollowPaidActionFragment}
 */
export declare function isFollowPaidAction(result: FollowPaidActionFragment | OpenActionPaidActionFragment): result is FollowPaidActionFragment;
/**
 * Check if the result is a {@link OpenActionPaidActionFragment}.
 *
 * @param result - result to check
 * @returns true if the result is a {@link OpenActionPaidActionFragment}
 */
export declare function isOpenActionPaidAction(result: FollowPaidActionFragment | OpenActionPaidActionFragment): result is OpenActionPaidActionFragment;
