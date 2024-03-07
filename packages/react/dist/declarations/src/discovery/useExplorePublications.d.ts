import { ExplorePublicationRequest, ExplorePublication } from '@digiv3rse/api-bindings';
import { PaginatedArgs, PaginatedReadResult } from "../helpers/reads.js";
export type UseExplorePublicationsArgs = PaginatedArgs<ExplorePublicationRequest>;
/**
 * `useExplorePublications` is a paginated hook that lets you discover new publications base on a defined criteria
 *
 * @category Discovery
 * @group Hooks
 * @param args - {@link UseExplorePublicationsArgs}
 *
 * @example
 * Explore publications of type post with the most comments
 * ```tsx
 * import { useExplorePublications, ExplorePublicationsOrderByType, ExplorePublicationType  } from '@digiv3rse/react';
 *
 * function ExplorePublications() {
 *   const { data, error, loading } = useExplorePublications(
 *    where: {
 *        publicationTypes: [ExplorePublicationType.Post],
 *      },
 *    orderBy: ExplorePublicationsOrderByType.TopCommented,
 * );
 *
 *   if (loading) return <p>Loading...</p>;
 *
 *   if (error) return <p>Error: {error.message}</p>;
 *
 *   return (
 *     <ul>
 *       {data.map((publication) => (
 *         <li key={publication.id}>
 *            // render publication details
 *         </li>
 *       ))}
 *     </ul>
 *   );
 * }
 * ```
 */
export declare function useExplorePublications({ where, orderBy }?: UseExplorePublicationsArgs): PaginatedReadResult<ExplorePublication[]>;
