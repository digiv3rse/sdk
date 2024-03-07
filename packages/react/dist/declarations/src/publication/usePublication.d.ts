import { AnyPublication, PublicationRequest, UnspecifiedError } from '@digiv3rse/api-bindings';
import { OneOf } from '@digiv3rse/shared-kernel';
import { NotFoundError } from "../NotFoundError.js";
import { ReadResult } from "../helpers/reads.js";
/**
 * {@link usePublication} hook arguments
 */
export type UsePublicationArgs = OneOf<PublicationRequest>;
/**
 * Fetch a publication by either its publication id or transaction hash.
 *
 * @example
 * ```tsx
 * const { data, error, loading } = usePublication({
 *   forId: '0x04-0x0b',
 * });
 * ```
 *
 * @category Publications
 * @group Hooks
 * @param args - {@link UsePublicationArgs}
 */
export declare function usePublication({ forId, forTxHash, }: UsePublicationArgs): ReadResult<AnyPublication, NotFoundError | UnspecifiedError>;
