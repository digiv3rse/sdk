import { AnyPublication } from '@digiv3rse/api-bindings';
import { UseDeferredTask } from "../helpers/tasks.js";
export type UseHidePublicationArgs = {
    publication: AnyPublication;
};
/**
 * Hide a publication posted by the authenticated profile to prevent other profiles from seeing it.
 *
 * You MUST be authenticated via {@link useLogin} to use this hook.
 *
 * @example
 * ```tsx
 * import { useHidePublication, AnyPublication } from '@digiv3rse/react';
 *
 * function HidePublication({ publication }: { publication: AnyPublication }) {
 *   const { execute: hide, loading } = useHidePublication();
 *
 *   if (publication.isHidden) {
 *    return <span>Publication is hidden</span>;
 *   }
 *
 *   return (
 *     <button onClick={() => hide({ publication })} disabled={loading}>
 *       Hide publication
 *     </button>
 *   );
 * }
 * ```
 *
 * @category Publications
 * @group Hooks
 * @param args - {@link UseHidePublicationArgs}
 */
export declare function useHidePublication(): UseDeferredTask<void, never, UseHidePublicationArgs>;
