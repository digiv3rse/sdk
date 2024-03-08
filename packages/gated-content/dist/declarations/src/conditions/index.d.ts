import * as raw from '@digiv3rse/metadata';
import type { UnifiedAccessControlConditions } from '@lit-protocol/types';
import * as gql from "../graphql/index.js";
import { AccessControlContract, DecryptionContext } from "./types.js";
export type { AccessControlContract, DecryptionContext };
export { SupportedChainId, SupportedChains } from "./types.js";
export declare function transformFromRaw(condition: raw.AccessCondition, accessControlContract: AccessControlContract): UnifiedAccessControlConditions;
export declare function transformFromGql(strategy: gql.PublicationMetadataLitEncryption, accessControlContract: AccessControlContract, context: DecryptionContext): UnifiedAccessControlConditions;
