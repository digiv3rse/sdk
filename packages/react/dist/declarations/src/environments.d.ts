import { URL } from '@digiv3rse/shared-kernel';
import { ChainConfigRegistry } from "./chains.js";
/**
 * The transaction observer timings
 *
 * @internal
 */
export type TransactionObserverTimings = {
    pollingInterval: number;
    maxMiningWaitTime: number;
    maxIndexingWaitTime: number;
};
/**
 * A function that resolves a profile localName to a fully qualified profile handle
 *
 * @internal
 */
export type ProfileHandleResolver = (localName: string) => string;
/**
 * The environment configuration type
 *
 * @internal
 */
export type EnvironmentConfig = {
    name: string;
    backend: URL;
    chains: ChainConfigRegistry;
    timings: TransactionObserverTimings;
    contracts: {
        permissionlessCreator: string;
    };
    handleResolver: ProfileHandleResolver;
};
/**
 * The production environment configuration
 *
 * This is the environment to be used in the live instance of your application (real users, real profiles, real data).
 *
 * - Endpoint: https://api-v2.digi.dev
 * - Chain IDs: 137 (Polygon), 1 (Ethereum)
 * - Profile handle namespace: `digi/`
 * - Environment specific timings
 */
export declare const production: EnvironmentConfig;
/**
 * The development environment configuration
 *
 * This is the environment to be used when you develop and test your application (test users, test profiles, test data)
 *
 * - Endpoint: https://api-v2-mumbai-live.digi.dev
 * - Chain IDs: 80001 (Mumbai), 5 (Goerli)
 * - Profile handle namespace: `test/`
 * - Environment specific timings
 */
export declare const development: EnvironmentConfig;
/**
 * @internal
 */
export declare const staging: EnvironmentConfig;
