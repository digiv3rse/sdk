import { AnyPublication } from '@digiv3rse/api-bindings';
import { UseDeferredTask } from "../helpers/tasks.js";
export type UseNotInterestedToggleArgs = {
    publication: AnyPublication;
};
export type NotInterestedOperation = UseDeferredTask<void, never, UseNotInterestedToggleArgs>;
/**
 * `useNotInterestedToggle` hook let's the active profile toggle the not interested status of a publication.
 *
 * You MUST be authenticated via {@link useLogin} to use this hook.
 *
 * You can use the `primaryPublication.operations.isNotInterested` property to determine
 * the active profile's interest with the provided publication.
 *
 * @example
 * ```tsx
 * import { AnyPublication, useNotInterestedToggle } from '@digiv3rse/react-web';
 *
 * function Publication({ publication }: { publication: AnyPublication }) {
 *   const { execute: toggle, loading } = useNotInterestedToggle();
 *
 *   return (
 *     <button onClick={() => toggle({ publication })} disabled={loading}>
 *       {publication.operations.isNotInterested ? 'Not interested' : 'Interested'}
 *     </button>
 *   );
 * }
 * ```
 *
 * @category Publications
 * @group Hooks
 */
export declare function useNotInterestedToggle(): NotInterestedOperation;
