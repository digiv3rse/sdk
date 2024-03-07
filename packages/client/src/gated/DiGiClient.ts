import {
  AuthenticationConfig,
  GatedClient,
  IEncryptionProvider,
  ISigner,
} from '@digiv3rse/gated-content';
import { webCryptoProvider } from '@digiv3rse/gated-content/web';
import { InMemoryStorageProvider } from '@digiv3rse/storage';

import * as core from '../DiGiClient';
import { Gated } from './Gated';

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
export class DiGiClient extends core.DiGiClient {
  private _gated: Gated;

  constructor(config: DiGiClientConfig) {
    super(config);
    this._gated = new Gated(
      new GatedClient({
        environment: config.environment.gated,
        authentication: config.authentication,
        signer: config.signer,
        storageProvider: config.storage ?? new InMemoryStorageProvider(),
        encryptionProvider: config.encryption ?? webCryptoProvider(),
      }),
      this._authentication,
    );
  }

  /**
   * The Gated module
   */
  get gated(): Gated {
    return this._gated;
  }
}
