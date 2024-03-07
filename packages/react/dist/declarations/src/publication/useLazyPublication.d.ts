import { AnyPublication, PublicationRequest, UnspecifiedError } from '@digiv3rse/api-bindings';
import { OneOf } from '@digiv3rse/shared-kernel';
import { NotFoundError } from "../NotFoundError.js";
import { UseDeferredTask } from "../helpers/tasks.js";
/**
 * {@link useLazyPublication} callback hook arguments
 */
export type FetchPublicationArgs = OneOf<PublicationRequest>;
/**
 * `useLazyPublication` is a lazy version of {@link usePublication} React Hook.
 *
 * This hook will not fetch the publication until the returned function is called.
 *
 * This hook is intended to enable more complex use cases, the vast majority of
 * use cases should use {@link usePublication} instead.
 *
 * @example
 * ```ts
 * const { called, data, error, loading, execute } = useLazyPublication();
 * ```
 *
 * @experimental This hook is experimental and may change in the future.
 *
 * ```ts
 * const { called, data, error, loading, execute } = useLazyPublication();
 *
 * const callback = async () => {
 *   const result = await execute({ forId: publicationId });
 *
 *   if (result.isFailure()) {
 *     toast.error(result.error.message);
 *     return;
 *   }
 *
 *   const publication = result.value;
 *
 *   // do something with the publication
 * }
 * ```
 *
 * @category Publications
 * @group Hooks
 */
export declare function useLazyPublication(): UseDeferredTask<AnyPublication, NotFoundError | UnspecifiedError, FetchPublicationArgs>;
