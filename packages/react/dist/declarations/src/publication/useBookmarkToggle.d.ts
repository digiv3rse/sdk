import { AnyPublication } from '@digiv3rse/api-bindings';
import { UseDeferredTask } from "../helpers/tasks.js";
export type UseBookmarkToggleArgs = {
    publication: AnyPublication;
};
export type BookmarkOperation = UseDeferredTask<void, never, UseBookmarkToggleArgs>;
/**
 * `useBookmarkToggle` hook lets the user save or remove a publication from their bookmarks.
 *
 * You MUST be authenticated via {@link useLogin} to use this hook.
 *
 * You can use the `primaryPublication.operations.hasBookmarked` property to determine
 * if the publication is bookmarked by the active profile.
 *
 * @category Publications
 * @group Hooks
 * @param args - {@link UseBookmarkToggleArgs}
 *
 * @example
 * ```tsx
 * import { AnyPublication, useBookmarkToggle } from '@digiv3rse/react-web';
 *
 * function Publication({ publication }: { publication: AnyPublication }) {
 *   const { execute: toggle, loading } = useBookmarkToggle();
 *
 *   return (
 *     <button onClick={() => toggle({ publication })} disabled={loading}>
 *       {publication.operations.hasBookmarked ? 'Bookmarked' : 'Not bookmarked'}
 *     </button>
 *   );
 * }
 * ```
 */
export declare function useBookmarkToggle(): UseDeferredTask<void, never, UseBookmarkToggleArgs>;
