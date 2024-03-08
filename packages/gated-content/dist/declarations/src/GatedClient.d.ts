import * as raw from '@digiv3rse/metadata';
import { PromiseResult } from '@digiv3rse/shared-kernel';
import { IStorageProvider } from '@digiv3rse/storage';
import { JsonEncryptionRetrieveRequest, JsonSaveEncryptionKeyRequest } from '@lit-protocol/types';
import { CannotDecryptError } from "./CannotDecryptError.js";
import { IEncryptionProvider } from "./IEncryptionProvider.js";
import { DecryptionContext } from "./conditions/index.js";
import { EnvironmentConfig } from "./environments.js";
import * as gql from "./graphql/index.js";
/**
 * As per [EIP-4361](https://eips.ethereum.org/EIPS/eip-4361) the information
 * provided will be used to create a SIWE message.
 *
 * @example
 * ```
 * ${domain} wants you to sign in with your Ethereum account:
 * ${address}
 *
 * ${statement}
 *
 * URI: ${uri}
 * ...
 * ```
 */
export type AuthenticationConfig = {
    /**
     * The domain that is requesting the signing.
     *
     * This will be displayed to the user as well as used by compliant wallets to
     * avoid phishing attacks.
     */
    domain: string;
    /**
     * A human-readable ASCII assertion that the user will sign which MUST NOT include `\n` (the byte `0x0a`).
     *
     * This will be displayed to the user if signed using the user's wallet.
     */
    statement?: string;
    /**
     * The subject of the signing claim.
     */
    uri: string;
};
/**
 * An object implementing basic signer functionality.
 *
 * This is structurally compatible with the `ethers` `Signer` interface.
 */
export interface ISigner {
    /**
     * Returns the address of the signer.
     */
    getAddress(): Promise<string>;
    /**
     * Signs a message.
     */
    signMessage(message: string): Promise<string>;
}
export type GatedClientConfig = {
    authentication: AuthenticationConfig;
    environment: EnvironmentConfig;
    signer: ISigner;
    storageProvider: IStorageProvider;
    encryptionProvider: IEncryptionProvider;
};
export interface ILitNodeClient {
    ready: boolean;
    connect(): Promise<void>;
    saveEncryptionKey(request: JsonSaveEncryptionKeyRequest): Promise<Uint8Array>;
    getEncryptionKey(request: JsonEncryptionRetrieveRequest): Promise<Uint8Array>;
}
export type { DecryptionContext };
export declare class GatedClient {
    private readonly authentication;
    private readonly environment;
    private readonly storage;
    private readonly signer;
    protected litClient: ILitNodeClient;
    private readonly encryptionProvider;
    constructor({ authentication, environment, signer, storageProvider, encryptionProvider, }: GatedClientConfig);
    encryptPublicationMetadata<T extends raw.PublicationMetadata>(metadata: T, accessCondition: raw.AccessCondition): PromiseResult<T, never>;
    decryptPublicationMetadataFragment<T extends gql.EncryptedFragmentOfAnyPublicationMetadata>(encryptedMetadata: T, context: DecryptionContext): PromiseResult<T, CannotDecryptError>;
    private decrypt;
    private getOrCreateAuthSig;
    private ensureLitConnection;
    private saveEncryptionKey;
    private retrieveCipher;
    private retrieveEncryptionKey;
    private createSiweMessage;
}
export type { JsonSaveEncryptionKeyRequest, JsonEncryptionRetrieveRequest };
