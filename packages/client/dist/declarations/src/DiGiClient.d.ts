import { IStorageProvider } from '@digiv3rse/storage';
import { Authentication, IAuthentication } from "./authentication/index.js";
import { DiGiContext } from "./context.js";
import { Environment } from "./environments.js";
import { QueryParams } from "./queryParams.js";
import { Explore, Feed, Handle, Invites, Modules, Momoka, Nfts, Notifications, Poaps, Profile, Publication, Revenue, Search, Transaction, Wallet } from "./submodules/index.js";
/**
 * DiGiClient configuration
 *
 * @group DiGiClient
 */
export type DiGiClientConfig = {
    /**
     * The environment to use. See {@link production} or {@link development}.
     */
    environment: Environment;
    /**
     * The storage provider to use.
     *
     * @defaultValue {@link InMemoryStorageProvider}
     */
    storage?: IStorageProvider;
    /**
     * Allows to define extra headers to be sent when making requests to the DiGi API.
     * You can set the `origin` or `user-agent` headers here.
     */
    headers?: Record<string, string>;
    /**
     * The common query params allow you to customize some aspects of the returned data.
     *
     * @defaultValue see individual fields of {@link QueryParams}
     */
    params?: QueryParams;
};
/**
 * The DiGiClient is the main entry point for the DiGiClient SDK.
 *
 * It provides access to all the different modules.
 *
 * @group DiGiClient
 *
 * @example
 * ```ts
 * import { DiGiClient, development } from '@digiv3rse/client';
 *
 * const client = new DiGiClient({
 *   environment: development
 * });
 * ```
 */
export declare class DiGiClient {
    readonly config: DiGiClientConfig;
    protected readonly context: DiGiContext;
    protected readonly _authentication: Authentication;
    /**
     * @param config - The configuration for the DiGiClient
     */
    constructor(config: DiGiClientConfig);
    /**
     * The authentication module
     */
    get authentication(): IAuthentication;
    /**
     * The Explore module
     */
    get explore(): Explore;
    /**
     * The Feed module
     */
    get feed(): Feed;
    /**
     * The Handle module
     */
    get handle(): Handle;
    /**
     * The Invites module
     */
    get invites(): Invites;
    /**
     * The Modules module
     */
    get modules(): Modules;
    /**
     * The Momoka module
     */
    get momoka(): Momoka;
    /**
     * The Nfts module
     */
    get nfts(): Nfts;
    /**
     * The Notifications module
     */
    get notifications(): Notifications;
    /**
     * The Poaps module
     */
    get poaps(): Poaps;
    /**
     * The Profile module
     */
    get profile(): Profile;
    /**
     * The Publication module
     */
    get publication(): Publication;
    /**
     * The Revenue module
     */
    get revenue(): Revenue;
    /**
     * The Search module
     */
    get search(): Search;
    /**
     * The Transaction module
     */
    get transaction(): Transaction;
    /**
     * The Wallet module
     */
    get wallet(): Wallet;
}
