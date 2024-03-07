import { FeedHighlight, FeedHighlightsRequest } from '@digiv3rse/api-bindings';
import { OmitCursor, PaginatedReadResult } from "../helpers/reads.js";
export type UseFeedHighlightsArgs = OmitCursor<FeedHighlightsRequest>;
/**
 * Fetch a the highlights of a feed for given profile and filters.
 *
 * You MUST be authenticated via {@link useLogin} to use this hook.
 *
 * @category Discovery
 * @group Hooks
 * @param args - {@link UseFeedHighlightsArgs}
 *
 * @example
 * ```tsx
 * import { useFeedHighlights, ProfileId } from '@digiv3rse/react';
 *
 * function Feed({ profileId }: { profileId: ProfileId }) {
 *   const { data, loading, error } =  useFeedHighlights({
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
 *       {data.map((item) => (
 *         <li key={item.id}>
 *           // render item details
 *         </li>
 *       ))}
 *     </ul>
 *   );
 * }
 * ```
 */
export declare function useFeedHighlights({ where, }: UseFeedHighlightsArgs): PaginatedReadResult<FeedHighlight[]>;
