import { PrimaryPublication, PublicationReactionType } from '@digiv3rse/api-bindings';
import { UseDeferredTask } from "../helpers/tasks.js";
export type HasReactedArgs = {
    publication: PrimaryPublication;
    reaction: PublicationReactionType;
};
/**
 * A helper to check if a certain type of reaction has been added to a publication.
 *
 * @example
 * ```tsx
 * const hasUpvoted = hasReacted({
 *   publication,
 *   reaction: PublicationReactionType.Upvote,
 * });
 * ```
 *
 * @group Helpers
 */
export declare function hasReacted(args: HasReactedArgs): boolean;
export type ReactionToggleArgs = {
    publication: PrimaryPublication;
    reaction: PublicationReactionType;
};
/**
 * `useReactionToggle` hook allows to add or remove a reaction to a publication.
 *
 * You MUST be authenticated via {@link useLogin} to use this hook.
 *
 * @example
 * ```tsx
 * import { PrimaryPublication, useReactionToggle } from '@digiv3rse/react-web';
 *
 * function Publication({ publication }: { publication: PrimaryPublication }) {
 *  const { execute: toggle, loading, error } = useReactionToggle();
 *
 *  const toggleReaction = async () => {
 *    await toggle({
 *      reaction: PublicationReactionType.Upvote,
 *      publication,
 *    });
 *  };
 *
 *  if (error) {
 *   return <p>Error reacting to publication: {error.message}</p>;
 *  }
 *
 *  return (
 *    <div>
 *      // render publication details
 *      <button onClick={toggleReaction} disabled={loading}>
 *        Toggle reaction
 *      </button>
 *    </div>
 *  );
 * }
 * ```
 *
 * @category Publications
 * @group Hooks
 */
export declare function useReactionToggle(): UseDeferredTask<void, never, ReactionToggleArgs>;
