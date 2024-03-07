/**
 * The official DiGi Protocol bindings for React applications.
 *
 * This package enables you to build applications on top of the DiGi Protocol using React.
 *
 * **Note**
 *
 * This is a low-level package, if you are building a web application you might want to look into `@digiv3rse/react-web` package instead.
 *
 * @module
 */
/**
 * Components
 */
export * from "./BaseProvider.js";
/**
 * Hooks
 */
export * from "./authentication/index.js";
export * from "./discovery/index.js";
export * from "./experimental/index.js";
export * from "./misc/index.js";
export * from "./notifications/index.js";
export * from "./profile/index.js";
export * from "./publication/index.js";
export * from "./revenue/index.js";
export * from "./transactions/index.js";
export * from "./wallet/index.js";
/**
 * Domain essentials
 */
export type { AppId, ProfileId, PublicationId } from '@digiv3rse/domain/entities';
export { Amount, ChainType, erc20, fiat, ether, matic } from '@digiv3rse/shared-kernel';
export type { AmountValue, Asset, BigDecimal, CryptoAmount, CryptoAsset, CryptoNativeAmount, CryptoNativeAsset, Erc20, Erc20Amount, Erc20Info, Ether, EvmAddress, Failure, Fiat, FiatAmount, IEquatableError, Kind, Matic, NativeType, PromiseResult, Result, Success, URI, URL, } from '@digiv3rse/shared-kernel';
/**
 * Config
 */
export * from "./chains.js";
export * from "./config.js";
export * from "./environments.js";
/**
 * Hooks helpers types
 */
export type { PaginatedArgs, PaginatedReadResult, ReadResult, ReadResultWithError, ReadResultWithoutError, } from "./helpers/reads.js";
export * from "./helpers/tasks.js";
/**
 * GQL common types
 */
export type { App, OptimisticStatusResult } from '@digiv3rse/api-bindings';
export { CommentRankingFilterType, ComparisonOperatorConditionType, CustomFiltersType, ExploreProfilesOrderByType, ExplorePublicationsOrderByType, ExplorePublicationType, FeedEventItemType, FollowModuleType, HiddenCommentsType, LimitType, MarketplaceMetadataAttributeDisplayType, NftContractType, NotificationType, OpenActionCategoryType, OpenActionModuleType, ProfileActionHistoryType, ProfileInterestTypes, PublicationContentWarningType, PublicationMetadataLicenseType, PublicationMetadataMainFocusType, PublicationMetadataTransactionType, PublicationReactionType, PublicationType, SearchPublicationType, TriStateValue, } from '@digiv3rse/api-bindings';
/**
 * Common errors
 */
export { UnspecifiedError } from '@digiv3rse/api-bindings';
export { InsufficientGasError, PendingSigningRequestError, TransactionError, UserRejectedError, WalletConnectionError, } from '@digiv3rse/domain/entities';
export { BroadcastingError, BroadcastingErrorReason, } from '@digiv3rse/domain/use-cases/transactions';
export { InsufficientAllowanceError, InsufficientFundsError, } from '@digiv3rse/domain/use-cases/wallets';
export { InvariantError } from '@digiv3rse/shared-kernel';
export { NotFoundError } from "./NotFoundError.js";
/**
 * Helpers
 */
export { erc20Amount, fiatAmount } from '@digiv3rse/api-bindings';
export * from "./ConsoleLogger.js";
export { useSharedDependencies } from "./shared.js";
export * from "./utils.js";
