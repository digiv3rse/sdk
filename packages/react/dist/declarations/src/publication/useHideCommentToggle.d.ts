import { Comment } from '@digiv3rse/api-bindings';
import { UseDeferredTask } from "../helpers/tasks.js";
export type UseHideCommentToggleArgs = {
    comment: Comment;
};
/**
 * This hook enables the author of a publication to toggle the visibility of a comment on their publication.
 *
 * You MUST be authenticated via {@link useLogin} to use this hook.
 *
 * @example
 * ```tsx
 * import { Comment, useHideCommentToggle } from '@digiv3rse/react-web';
 *
 * function HideableComment({ comment }: { comment: Comment }) {
 *   const { execute: toggle, loading } = useHideCommentToggle();
 *
 *   return (
 *     <button onClick={() => toggle({ comment })} disabled={loading}>
 *       {comment.hiddenByAuthor ? 'Unhide' : 'Hide'}
 *     </button>
 *   );
 * }
 * ```
 *
 * @category Publications
 * @group Hooks
 * @param args - {@link UseHideCommentToggleArgs}
 */
export declare function useHideCommentToggle(): UseDeferredTask<void, never, UseHideCommentToggleArgs>;
