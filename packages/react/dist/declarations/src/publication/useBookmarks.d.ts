import { AnyPublication, PublicationBookmarksRequest } from '@digiv3rse/api-bindings';
import { PaginatedArgs, PaginatedReadResult } from "../helpers/reads.js";
export type UseBookmarksArgs = PaginatedArgs<PublicationBookmarksRequest>;
/**
 * `useBookmarks` is a paginated hook that lets you fetch the bookmarks of a profile owned by the logged in wallet.
 *
 * You MUST be authenticated via {@link useLogin} to use this hook.
 *
 * @category Bookmarks
 * @group Hooks
 * @param args - {@link UseBookmarksArgs}
 *
 * @example
 * ```tsx
 * const { data, loading, error } = useBookmarks();
 * ```
 */
export declare function useBookmarks(args?: UseBookmarksArgs): PaginatedReadResult<AnyPublication[]>;
