import { CannotDecryptError, GatedClient } from '@digiv3rse/gated-content';
import { AnyCondition, PublicationMetadata } from '@digiv3rse/metadata';
import { PromiseResult } from '@digiv3rse/shared-kernel';
import { Authentication } from "../authentication/index.js";
import { CredentialsExpiredError, NotAuthenticatedError } from "../errors.js";
import { AnyEncryptablePublicationMetadataFragment } from "../graphql/index.js";
/**
 * Gated module.
 *
 * @group DiGiClient Modules
 */
export declare class Gated {
    private readonly client;
    private readonly authentication;
    constructor(client: GatedClient, authentication: Authentication);
    /**
     * Encrypts Publication Metadata with the given access condition.
     *
     * ⚠️ Requires authenticated DiGiClient.
     *
     * @example
     * Typical usage:
     * 1) create metadata,
     * 2) encrypt it,
     * 3) upload it to a public location (e.g. IPFS, Arweave),
     * 4) use the resulting contentURI to create a DiGi publication.
     * ```ts
     * // create publication metadata via '@digiv3rse/metadata' helpers
     * const metadata = article({ content: '...' });
     *
     * // encrypt the metadata specifying the access condition
     * const result = await client.gated.encryptPublicationMetadata(
     *   metadata,
     *   eoaOwnershipCondition({
     *     address: signer.address,
     *   }),
     * );
     * const encrypted = result.unwrap();
     *
     * // upload the encrypted metadata your storage of choice
     * const contentURI = await uploadToIPFS(encrypted);
     *
     * // use the contentURI to create a publication
     * ```
     *
     * @example
     * Multiple criteria can be combined using the `orCondition` and `andCondition` helpers.
     * ```ts
     * const result = await client.gated.encryptPublicationMetadata(
     *   metadata,
     *   orCondition([
     *     profileOwnershipCondition({
     *       profileId: profile.id,
     *     }),
     *     eoaOwnershipCondition({
     *       address: signer.address,
     *     }),
     *   ])
     * );
     * ```
     *
     * Supported criteria:
     * - `collectCondition` - the collection of a given publication is required
     * - `eoaOwnershipCondition` - the ownership of a given EOA is required
     * - `erc20OwnershipCondition` - the ownership of a given ERC20 amount is required
     * - `erc721OwnershipCondition` - the ownership of a given ERC721 token is required
     * - `erc1155OwnershipCondition` - the ownership of a given ERC1155 token is required
     * - `profileOwnershipCondition` - the ownership of a given profile is required
     * - `followCondition` - following a given profile is required
     * - `andCondition` - up to 5 conditions can be combined using the AND operator (except `orCondition` and `andCondition`)
     * - `orCondition` - up to 5 conditions can be combined using the OR operator (except `orCondition` and `andCondition`)
     *
     * @see [Metadata helpers](https://digi-protocol.github.io/metadata/) for more information on how to create publication metadata and access conditions.
     */
    encryptPublicationMetadata<T extends PublicationMetadata>(metadata: T, condition: AnyCondition): PromiseResult<T, CredentialsExpiredError | NotAuthenticatedError>;
    /**
     * Decrypts a Publication Metadata fragment returned by the DiGi API.
     *
     * ⚠️ Requires authenticated DiGiClient.
     *
     * The fragment MUST be encrypted. Use the {@link isEncryptedPublicationMetadata} type guard to check if the fragment is encrypted.
     *
     * @example
     * Typical usage:
     * 1) fetch a publication via a `DiGiClient` method,
     * 2) determine if the publication metadata is encrypted,
     * 3) decrypt the metadata fragment,
     * ```ts
     * const post = await client.publication.fetch({ forId: '...' });
     *
     * if (isEncryptedPublicationMetadata(post.metadata)) {
     *   const result = await client.gated.decryptPublicationMetadataFragment(post.metadata);
     *
     *   if (result.isSuccess()) {
     *     console.log(result.value);
     *   }
     * }
     * ```
     */
    decryptPublicationMetadataFragment<T extends AnyEncryptablePublicationMetadataFragment>(encryptedMetadata: T): PromiseResult<T, CannotDecryptError | CredentialsExpiredError | NotAuthenticatedError>;
}
