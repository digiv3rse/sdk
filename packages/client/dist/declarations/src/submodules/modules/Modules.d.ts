import { PromiseResult } from '@digiv3rse/shared-kernel';
import { Authentication } from "../../authentication/index.js";
import { DiGiContext } from "../../context.js";
import { CredentialsExpiredError, NotAuthenticatedError } from "../../errors.js";
import { Erc20Fragment } from "../../graphql/fragments.generated.js";
import { ApprovedModuleAllowanceAmountRequest, GenerateModuleCurrencyApprovalDataRequest, ModuleMetadataRequest, PaginatedOffsetRequest, SupportedModulesRequest } from "../../graphql/types.generated.js";
import { PaginatedResult } from "../../helpers/index.js";
import { ApprovedAllowanceAmountResultFragment, GenerateModuleCurrencyApprovalResultFragment, KnownSupportedModuleFragment, ModuleMetadataResultFragment, UnknownSupportedModuleFragment } from "./graphql/modules.generated.js";
/**
 * @group DiGiClient Modules
 */
export declare class Modules {
    private readonly context;
    private readonly authentication;
    private readonly sdk;
    /**
     * @internal
     */
    constructor(context: DiGiContext, authentication: Authentication);
    /**
     * Retrieve a list of currencies supported by the protocol
     *
     * @param request - The request object
     * @returns Currencies wrapped in {@link PaginatedResult}
     *
     * @example
     * ```ts
     * const result = await client.modules.fetchCurrencies();
     * ```
     */
    fetchCurrencies(request?: PaginatedOffsetRequest): Promise<PaginatedResult<Erc20Fragment>>;
    /**
     * Fetch the approved amount of requested currencies that each requested module can move
     * on behalf of the authenticated user.
     *
     * ⚠️ Requires authenticated DiGiClient.
     *
     * @param request - The request object
     * @returns {@link PromiseResult} with array of approved amounts per module
     *
     * @example
     * ```ts
     * import { FollowModuleType } from '@digiv3rse/client';
     *
     * const result = await client.modules.approvedAllowanceAmount({
     *   currencies: ['0x3C68CE8504087f89c640D02d133646d98e64ddd9'],
     *   followModules: [FollowModuleType.FeeFollowModule],
     * });
     * ```
     */
    approvedAllowanceAmount(request: ApprovedModuleAllowanceAmountRequest): PromiseResult<ApprovedAllowanceAmountResultFragment[], CredentialsExpiredError | NotAuthenticatedError>;
    /**
     * Generate the data required to approve the amount of a currency to be moved by the module.
     *
     * This method encodes the allowance ERC-20 data for the module. It returns the partial transaction that still needs to be submitted.
     *
     * ⚠️ Requires authenticated DiGiClient.
     *
     * @param request - The request object
     * @returns {@link PromiseResult} with requested data
     *
     * @example
     * ```ts
     * import { FollowModuleType } from '@digiv3rse/client';
     *
     * const result = await client.modules.generateCurrencyApprovalData({
     *   allowance: {
     *     value: '100',
     *     currency: ['0x3C68CE8504087f89c640D02d133646d98e64ddd9'],
     *   },
     *   module: {
     *     followModule: FollowModuleType.FeeFollowModule,
     *   },
     * });
     * ```
     */
    generateCurrencyApprovalData(request: GenerateModuleCurrencyApprovalDataRequest): PromiseResult<GenerateModuleCurrencyApprovalResultFragment, CredentialsExpiredError | NotAuthenticatedError>;
    /**
     * Retrieve a list of modules supported by the protocol
     *
     * @param request - The request object
     * @returns Modules wrapped in {@link PaginatedResult}
     *
     * @example
     * ```ts
     * const result = await client.modules.supportedFollowModules();
     * ```
     */
    supportedFollowModules(request?: SupportedModulesRequest): Promise<PaginatedResult<KnownSupportedModuleFragment | UnknownSupportedModuleFragment>>;
    /**
     * Retrieve a list of modules supported by the protocol
     *
     * @param request - The request object
     * @returns Modules wrapped in {@link PaginatedResult}
     *
     * @example
     * ```ts
     * const result = await client.modules.supportedReferenceModules();
     * ```
     */
    supportedReferenceModules(request?: SupportedModulesRequest): Promise<PaginatedResult<KnownSupportedModuleFragment | UnknownSupportedModuleFragment>>;
    /**
     * Retrieve a list of modules supported by the protocol
     *
     * @param request - The request object
     * @returns Modules wrapped in {@link PaginatedResult}
     *
     * @example
     * ```ts
     * const result = await client.modules.supportedOpenActionModules();
     * ```
     */
    supportedOpenActionModules(request?: SupportedModulesRequest): Promise<PaginatedResult<KnownSupportedModuleFragment | UnknownSupportedModuleFragment>>;
    /**
     * Retrieve a list of modules supported by the protocol
     *
     * @param request - The request object
     * @returns Modules wrapped in {@link PaginatedResult}
     *
     * @example
     * ```ts
     * const result = await client.modules.supportedOpenActionCollectModules();
     * ```
     */
    supportedOpenActionCollectModules(request?: SupportedModulesRequest): Promise<PaginatedResult<KnownSupportedModuleFragment | UnknownSupportedModuleFragment>>;
    /**
     * Retrieve the Module Metadata for a given module
     *
     * @param request - The request object
     * @returns Module Metadata and how this can be used (gasless, signless, etc.). Returns `null` if the module is not found.
     *
     * @example
     * ```ts
     * const result = await client.modules.fetchMetadata({
     *   implementation: '0x1234567890123456789012345678901234567890',
     * });
     * ```
     */
    fetchMetadata(request: ModuleMetadataRequest): Promise<ModuleMetadataResultFragment | null>;
}
