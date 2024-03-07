import { IStorageProvider } from '@digiv3rse/storage';
import { Environment } from "./environments.js";
import { QueryParams } from "./queryParams.js";
/**
 * The DiGiClient context.
 *
 * @internal
 */
export type DiGiContext = {
    environment: Environment;
    storage: IStorageProvider;
    headers?: Record<string, string>;
    params: QueryParams;
};
