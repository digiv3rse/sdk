import { FeedItem, FeedRequest } from '@digiv3rse/api-bindings';
import { OmitCursor, PaginatedReadResult } from "../helpers/reads.js";
export type UseFeedArgs = OmitCursor<FeedRequest>;
/**
 * Fetch a the feed of a given profile and filters.
 *
 * You MUST be authenticated via {@link useLogin} to use this hook.
 *
 * @category Discovery
 * @group Hooks
 * @param args - {@link UseFeedArgs}
 *
 * @example
 * ```tsx
 * import { useFeed, ProfileId } from '@digiv3rse/react';
 *
 * function Feed({ profileId }: { profileId: ProfileId }) {
 *   const { data, loading, error } =  useFeed({
 *      where: {
 *        for: profileId,
 *      },
 *    });
 *
 *   if (loading) return <div>Loading...</div>;
 *
 *   if (error) return <div>Error: {error.message}</div>;
 *
 *   return (
 *     <ul>
 *       {data.map((item, idx) => (
 *         <li key={`${item.root.id}-${idx}`}>
 *           // render item details
 *         </li>
 *       ))}
 *     </ul>
 *   );
 * }
 * ```
 */
export declare function useFeed({ where }: UseFeedArgs): PaginatedReadResult<FeedItem[]>;
