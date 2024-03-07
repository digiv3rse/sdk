import { AuthenticationConfig, IEncryptionProvider, ISigner } from '@digiv3rse/gated-content';
import * as core from "../DiGiClient.js";
import { Gated } from "./Gated.js";
/**
 * The configuration for the DiGiClient
 *
 * @group DiGiClient
 */
export type DiGiClientConfig = core.DiGiClientConfig & {
    /**
     * The authentication configuration to use for authenticating with the Lit Protocol network.
     */
    authentication: AuthenticationConfig;
    /**
     * The signer to use for signing the SIWE for Lit Protocol authentication.
     */
    signer: ISigner;
    /**
     * The encryption provider to use for encrypting and decrypting strings.
     *
     * @defaultValue a Web Crypto API based encryption provider
     */
    encryption?: IEncryptionProvider;
};
/**
 * DiGi Protocol Client with token-gated content support.
 *
 * It provides access to all the core {@link Core.DiGiClient} modules and the {@link Gated} module.
 *
 * @example
 * NodeJS example:
 * ```ts
 * import { Wallet } from 'ethers';
 * import { production } from '@digiv3rse/client';
 * import { DiGiClient } from '@digiv3rse/client/gated';
 *
 * const signer = new Wallet(process.env.PRIVATE_KEY);
 *
 * const client = new DiGiClient({
 *   environment: production,
 *
 *   authentication: {
 *     domain: process.env.DOMAIN,
 *     uri: process.env.URI,
 *   },
 *
 *   signer,
 * });
 * ```
 *
 * @example
 * Browser example with `ethers` v6 and browser wallet (e.g. MetaMask):
 * ```ts
 * import { BrowserProvider } from 'ethers';
 * import { production } from '@digiv3rse/client';
 * import { DiGiClient } from '@digiv3rse/client/gated';
 *
 * const provider = new BrowserProvider(window.ethereum);
 *
 * const client = new DiGiClient({
 *   environment: production,
 *
 *   authentication: {
 *     domain: window.location.hostname,
 *     uri: window.location.href,
 *   },
 *
 *   signer: await provider.getSigner(),
 * });
 * ```
 *
 * @group DiGiClient
 */
export declare class DiGiClient extends core.DiGiClient {
    private _gated;
    constructor(config: DiGiClientConfig);
    /**
     * The Gated module
     */
    get gated(): Gated;
}
