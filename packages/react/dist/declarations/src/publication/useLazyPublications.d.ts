import { AnyPublication, PublicationsRequest, UnspecifiedError } from '@digiv3rse/api-bindings';
import { PaginatedArgs } from "../helpers/reads.js";
import { UseDeferredTask } from "../helpers/tasks.js";
/**
 * {@link useLazyPublications} callback hook arguments
 */
export type FetchPublicationsArgs = PaginatedArgs<PublicationsRequest>;
/**
 * `useLazyPublications` is a lazy version of {@link usePublications} React Hook.
 *
 * This version doesn't support pagination!
 *
 * This hook will not fetch publications until the returned function is called.
 *
 * @experimental This hook is experimental and may change in the future.
 * @example
 * ```ts
 * const { called, data, error, loading, execute } = useLazyPublications();
 *
 * const callback = async () => {
 *   const result = await execute({
 *     where: {
 *       publicationTypes: [PublicationType.Post]
 *     }
 *   });
 *
 *   if (result.isFailure()) {
 *     toast.error(result.error.message);
 *     return;
 *   }
 *
 *   const publications = result.value;
 *
 *   // do something with the publications
 * }
 * ```
 *
 * @category Publications
 * @group Hooks
 */
export declare function useLazyPublications(): UseDeferredTask<AnyPublication[], UnspecifiedError, FetchPublicationsArgs>;
