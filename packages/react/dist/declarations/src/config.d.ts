import { AllFragmentVariables, ImageTransform, SupportedFiatType } from '@digiv3rse/api-bindings';
import { AppId } from '@digiv3rse/domain/entities';
import { ILogger } from '@digiv3rse/shared-kernel';
import { IObservableStorageProvider, IStorageProvider } from '@digiv3rse/storage';
import { EnvironmentConfig } from "./environments.js";
import { RequiredSigner } from "./wallet/adapters/ConcreteWallet.js";
import { GetProvider, IProviderBinding } from "./wallet/infrastructure/ProviderFactory.js";
import { GetSigner, ISignerBinding } from "./wallet/infrastructure/SignerFactory.js";
export type { GetProvider, GetSigner, ILogger, IObservableStorageProvider, IStorageProvider, RequiredSigner, };
/**
 * The common query parameters used across any query.
 */
export type QueryParams = {
    /**
     * The size of the publication image.
     *
     * @defaultValue see individual fields
     */
    image?: {
        /**
         * The size of the small publication image
         *
         * @defaultValue width: 400px, height: auto, keepAspectRatio: true
         */
        small?: ImageTransform;
        /**
         * The size of the medium publication image
         *
         * @defaultValue width: 700px, height: auto, keepAspectRatio: true
         */
        medium?: ImageTransform;
    };
    /**
     * Profile related fields parameters
     *
     * @defaultValue see individual fields
     */
    profile?: {
        /**
         * The size of optimized profile image
         *
         * @defaultValue width: 256px, height: auto, keepAspectRatio: true
         */
        thumbnail?: ImageTransform;
        /**
         * The size of the cover image
         *
         * @defaultValue width: 1100px, height: auto, keepAspectRatio: true
         */
        cover?: ImageTransform;
        /**
         * The source to use for fetching profile metadata details.
         *
         * If not provided, it will default to the global profile metadata for any profile fetched.
         *
         * If provided and a profile does not have bespoke profile metadata it will fallback to their global profile metadata.
         *
         * To know more about app specific profile metadata, see example with `appId` in {@link https://digi-protocol.github.io/metadata/functions/profile.html}.
         *
         * @defaultValue empty, global profile metadata
         */
        metadataSource?: AppId;
    };
    /**
     * The fiat currency to use for the fx rate
     *
     * @defaultValue USD
     */
    fxRateFor?: SupportedFiatType;
    /**
     * The App Ids for which to fetch Publication and Profile Stats for.
     *
     * Affects mainly comments, mirrors, and quotes counts.
     *
     * @defaultValue empty, all apps
     */
    statsFor?: AppId[];
};
export { SupportedFiatType } from '@digiv3rse/api-bindings';
/**
 * The interface used to access the `Signer` and `Provider` instances.
 */
export interface IBindings extends ISignerBinding, IProviderBinding {
}
/**
 * `<BaseProvider>` configuration
 *
 * @internal
 */
export type BaseConfig = {
    bindings: IBindings;
    environment: EnvironmentConfig;
    logger?: ILogger;
    debug?: boolean;
    storage: IStorageProvider | IObservableStorageProvider;
    params?: QueryParams;
    origin?: string;
    sponsored?: boolean;
};
/**
 * Internal configuration
 *
 * @internal
 */
export type RequiredConfig = {
    bindings: IBindings;
    environment: EnvironmentConfig;
    logger: ILogger;
    debug: boolean;
    storage: IStorageProvider | IObservableStorageProvider;
    origin?: string;
    sponsored: boolean;
    fragmentVariables: AllFragmentVariables;
};
/**
 * @internal
 */
export declare function resolveConfig(config: BaseConfig): RequiredConfig;
