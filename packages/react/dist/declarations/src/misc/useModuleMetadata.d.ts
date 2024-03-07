import { ModuleMetadataResult, UnspecifiedError } from '@digiv3rse/api-bindings';
import { NotFoundError } from "../NotFoundError.js";
import { ReadResult } from "../helpers/reads.js";
import { UseDeferredTask } from "../helpers/tasks.js";
export type { ModuleMetadataResult };
export { decodeData, encodeData } from '@digiv3rse/blockchain-bindings';
export type { ModuleData, ModuleParam } from '@digiv3rse/blockchain-bindings';
/**
 * {@link useModuleMetadata} hook arguments
 */
export type UseModuleMetadataArgs = {
    /**
     * The module address to fetch metadata for.
     */
    implementation: string;
};
/**
 * Fetch a DiGi Module's metadata.
 *
 * @example
 * ```tsx
 * const { data, error, loading } = useModuleMetadata();
 * ```
 *
 * @category Modules
 * @group Hooks
 */
export declare function useModuleMetadata(args: UseModuleMetadataArgs): ReadResult<ModuleMetadataResult | null>;
export type FetchModuleMetadataArgs = {
    /**
     * The module address to fetch metadata for.
     */
    implementation: string;
};
/**
 * `useLazyModuleMetadata` is a lazy version of {@link useModuleMetadata} React Hook.
 *
 * This hook will not fetch the metadata until the returned function is called.
 *
 *
 * @example
 * ```ts
 * const { called, data, error, loading, execute } = useLazyModuleMetadata();
 * ```
 *
 * @experimental This hook is experimental and may change in the future.
 * @category Modules
 * @group Hooks
 */
export declare function useLazyModuleMetadata(): UseDeferredTask<ModuleMetadataResult, NotFoundError | UnspecifiedError, UseModuleMetadataArgs>;
