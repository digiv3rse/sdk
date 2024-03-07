import { OwnedHandlesRequest, HandleInfo } from '@digiv3rse/api-bindings';
import { PaginatedArgs, PaginatedReadResult } from "../helpers/reads.js";
/**
 * {@link useOwnedHandles} hook arguments
 */
export type UseOwnedHandlesArgs = PaginatedArgs<OwnedHandlesRequest>;
/**
 * `useOwnedHandles` is a paginated hook that lets you fetch handles owned by a wallet.
 *
 * @category Wallet
 * @group Hooks
 *
 * @example
 * ```tsx
 * const { data, loading, error } = useOwnedHandles({
 *   for: '0x1234567890123456789012345678901234567890',
 * });
 * ```
 */
export declare function useOwnedHandles(args: UseOwnedHandlesArgs): PaginatedReadResult<HandleInfo[]>;
