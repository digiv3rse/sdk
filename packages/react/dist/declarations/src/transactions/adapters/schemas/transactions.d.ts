import { AnyTransactionRequest, ProtocolTransactionRequest } from '@digiv3rse/domain/use-cases/transactions';
import { ChainType, UnknownObject } from '@digiv3rse/shared-kernel';
import { z } from 'zod';
export declare enum TransactionType {
    Native = 0,
    Meta = 1,
    Data = 2
}
export declare const TransactionSchema: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
    type: z.ZodLiteral<TransactionType.Meta>;
    chainType: z.ZodNativeEnum<typeof ChainType>;
    id: z.ZodString;
    relayerTxId: z.ZodString;
    txHash: z.ZodNullable<z.ZodString>;
    nonce: z.ZodNumber;
    request: z.ZodType<ProtocolTransactionRequest, z.ZodTypeDef, UnknownObject>;
}, "strip", z.ZodTypeAny, {
    id: string;
    type: TransactionType.Meta;
    chainType: ChainType;
    relayerTxId: string;
    txHash: string | null;
    nonce: number;
    request: import("@digiv3rse/domain/use-cases/profile").BlockProfilesRequest | import("@digiv3rse/domain/use-cases/publications").LegacyCollectRequest | import("@digiv3rse/domain/use-cases/publications").MultirecipientCollectRequest | import("@digiv3rse/domain/use-cases/publications").SimpleCollectRequest | import("@digiv3rse/domain/use-cases/publications").UnknownActionRequest | import("@digiv3rse/domain/use-cases/profile").ClaimFreeTextHandleRequest | import("@digiv3rse/domain/use-cases/profile").ClaimReservedHandleRequest | import("@digiv3rse/domain/use-cases/publications").CreateCommentRequest | import("@digiv3rse/domain/use-cases/publications").CreateMirrorRequest | import("@digiv3rse/domain/use-cases/publications").CreatePostRequest | import("@digiv3rse/domain/use-cases/publications").CreateQuoteRequest | import("@digiv3rse/domain/use-cases/profile").CreateProfileRequest | import("@digiv3rse/domain/use-cases/profile").FreeFollowRequest | import("@digiv3rse/domain/use-cases/profile").PaidFollowRequest | import("@digiv3rse/domain/use-cases/profile").UnknownFollowRequest | import("@digiv3rse/domain/use-cases/profile").UnblockProfilesRequest | import("@digiv3rse/domain/use-cases/profile").UnfollowRequest | import("@digiv3rse/domain/use-cases/profile").UpdateProfileManagersRequest | import("@digiv3rse/domain/use-cases/profile").UpdateFollowPolicyRequest | import("@digiv3rse/domain/use-cases/profile").SetProfileMetadataRequest | import("@digiv3rse/domain/use-cases/profile").LinkHandleRequest | import("@digiv3rse/domain/use-cases/profile").UnlinkHandleRequest | (import("@digiv3rse/domain/use-cases/profile").ClaimFreeTextHandleRequest & import("@digiv3rse/domain/use-cases/profile").ClaimReservedHandleRequest) | (import("@digiv3rse/domain/use-cases/profile").ClaimReservedHandleRequest & import("@digiv3rse/domain/use-cases/profile").ClaimFreeTextHandleRequest) | (import("@digiv3rse/domain/use-cases/profile").FreeFollowRequest & import("@digiv3rse/domain/use-cases/profile").PaidFollowRequest) | (import("@digiv3rse/domain/use-cases/profile").FreeFollowRequest & import("@digiv3rse/domain/use-cases/profile").UnknownFollowRequest) | (import("@digiv3rse/domain/use-cases/profile").PaidFollowRequest & import("@digiv3rse/domain/use-cases/profile").FreeFollowRequest) | (import("@digiv3rse/domain/use-cases/profile").PaidFollowRequest & import("@digiv3rse/domain/use-cases/profile").UnknownFollowRequest) | (import("@digiv3rse/domain/use-cases/profile").UnknownFollowRequest & import("@digiv3rse/domain/use-cases/profile").FreeFollowRequest) | (import("@digiv3rse/domain/use-cases/profile").UnknownFollowRequest & import("@digiv3rse/domain/use-cases/profile").PaidFollowRequest);
}, {
    id: string;
    type: TransactionType.Meta;
    chainType: ChainType;
    relayerTxId: string;
    txHash: string | null;
    nonce: number;
    request: UnknownObject;
}>, z.ZodObject<{
    type: z.ZodLiteral<TransactionType.Native>;
    chainType: z.ZodNativeEnum<typeof ChainType>;
    id: z.ZodString;
    relayerTxId: z.ZodOptional<z.ZodString>;
    txHash: z.ZodNullable<z.ZodString>;
    request: z.ZodType<AnyTransactionRequest, z.ZodTypeDef, UnknownObject>;
}, "strip", z.ZodTypeAny, {
    id: string;
    type: TransactionType.Native;
    chainType: ChainType;
    txHash: string | null;
    request: import("@digiv3rse/domain/use-cases/profile").BlockProfilesRequest | import("@digiv3rse/domain/use-cases/publications").LegacyCollectRequest | import("@digiv3rse/domain/use-cases/publications").MultirecipientCollectRequest | import("@digiv3rse/domain/use-cases/publications").SimpleCollectRequest | import("@digiv3rse/domain/use-cases/publications").UnknownActionRequest | import("@digiv3rse/domain/use-cases/profile").ClaimFreeTextHandleRequest | import("@digiv3rse/domain/use-cases/profile").ClaimReservedHandleRequest | import("@digiv3rse/domain/use-cases/publications").CreateCommentRequest | import("@digiv3rse/domain/use-cases/publications").CreateMirrorRequest | import("@digiv3rse/domain/use-cases/publications").CreatePostRequest | import("@digiv3rse/domain/use-cases/publications").CreateQuoteRequest | import("@digiv3rse/domain/use-cases/profile").CreateProfileRequest | import("@digiv3rse/domain/use-cases/profile").FreeFollowRequest | import("@digiv3rse/domain/use-cases/profile").PaidFollowRequest | import("@digiv3rse/domain/use-cases/profile").UnknownFollowRequest | import("@digiv3rse/domain/use-cases/transactions").TokenAllowanceRequest | import("@digiv3rse/domain/use-cases/profile").UnblockProfilesRequest | import("@digiv3rse/domain/use-cases/profile").UnfollowRequest | import("@digiv3rse/domain/use-cases/profile").UpdateProfileManagersRequest | import("@digiv3rse/domain/use-cases/profile").UpdateFollowPolicyRequest | import("@digiv3rse/domain/use-cases/profile").SetProfileMetadataRequest | import("@digiv3rse/domain/use-cases/profile").LinkHandleRequest | import("@digiv3rse/domain/use-cases/profile").UnlinkHandleRequest | (import("@digiv3rse/domain/use-cases/profile").ClaimFreeTextHandleRequest & import("@digiv3rse/domain/use-cases/profile").ClaimReservedHandleRequest) | (import("@digiv3rse/domain/use-cases/profile").ClaimReservedHandleRequest & import("@digiv3rse/domain/use-cases/profile").ClaimFreeTextHandleRequest) | (import("@digiv3rse/domain/use-cases/profile").FreeFollowRequest & import("@digiv3rse/domain/use-cases/profile").PaidFollowRequest) | (import("@digiv3rse/domain/use-cases/profile").FreeFollowRequest & import("@digiv3rse/domain/use-cases/profile").UnknownFollowRequest) | (import("@digiv3rse/domain/use-cases/profile").PaidFollowRequest & import("@digiv3rse/domain/use-cases/profile").FreeFollowRequest) | (import("@digiv3rse/domain/use-cases/profile").PaidFollowRequest & import("@digiv3rse/domain/use-cases/profile").UnknownFollowRequest) | (import("@digiv3rse/domain/use-cases/profile").UnknownFollowRequest & import("@digiv3rse/domain/use-cases/profile").FreeFollowRequest) | (import("@digiv3rse/domain/use-cases/profile").UnknownFollowRequest & import("@digiv3rse/domain/use-cases/profile").PaidFollowRequest);
    relayerTxId?: string | undefined;
}, {
    id: string;
    type: TransactionType.Native;
    chainType: ChainType;
    txHash: string | null;
    request: UnknownObject;
    relayerTxId?: string | undefined;
}>, z.ZodObject<{
    type: z.ZodLiteral<TransactionType.Data>;
    id: z.ZodString;
    request: z.ZodType<ProtocolTransactionRequest, z.ZodTypeDef, UnknownObject>;
}, "strip", z.ZodTypeAny, {
    id: string;
    type: TransactionType.Data;
    request: import("@digiv3rse/domain/use-cases/profile").BlockProfilesRequest | import("@digiv3rse/domain/use-cases/publications").LegacyCollectRequest | import("@digiv3rse/domain/use-cases/publications").MultirecipientCollectRequest | import("@digiv3rse/domain/use-cases/publications").SimpleCollectRequest | import("@digiv3rse/domain/use-cases/publications").UnknownActionRequest | import("@digiv3rse/domain/use-cases/profile").ClaimFreeTextHandleRequest | import("@digiv3rse/domain/use-cases/profile").ClaimReservedHandleRequest | import("@digiv3rse/domain/use-cases/publications").CreateCommentRequest | import("@digiv3rse/domain/use-cases/publications").CreateMirrorRequest | import("@digiv3rse/domain/use-cases/publications").CreatePostRequest | import("@digiv3rse/domain/use-cases/publications").CreateQuoteRequest | import("@digiv3rse/domain/use-cases/profile").CreateProfileRequest | import("@digiv3rse/domain/use-cases/profile").FreeFollowRequest | import("@digiv3rse/domain/use-cases/profile").PaidFollowRequest | import("@digiv3rse/domain/use-cases/profile").UnknownFollowRequest | import("@digiv3rse/domain/use-cases/profile").UnblockProfilesRequest | import("@digiv3rse/domain/use-cases/profile").UnfollowRequest | import("@digiv3rse/domain/use-cases/profile").UpdateProfileManagersRequest | import("@digiv3rse/domain/use-cases/profile").UpdateFollowPolicyRequest | import("@digiv3rse/domain/use-cases/profile").SetProfileMetadataRequest | import("@digiv3rse/domain/use-cases/profile").LinkHandleRequest | import("@digiv3rse/domain/use-cases/profile").UnlinkHandleRequest | (import("@digiv3rse/domain/use-cases/profile").ClaimFreeTextHandleRequest & import("@digiv3rse/domain/use-cases/profile").ClaimReservedHandleRequest) | (import("@digiv3rse/domain/use-cases/profile").ClaimReservedHandleRequest & import("@digiv3rse/domain/use-cases/profile").ClaimFreeTextHandleRequest) | (import("@digiv3rse/domain/use-cases/profile").FreeFollowRequest & import("@digiv3rse/domain/use-cases/profile").PaidFollowRequest) | (import("@digiv3rse/domain/use-cases/profile").FreeFollowRequest & import("@digiv3rse/domain/use-cases/profile").UnknownFollowRequest) | (import("@digiv3rse/domain/use-cases/profile").PaidFollowRequest & import("@digiv3rse/domain/use-cases/profile").FreeFollowRequest) | (import("@digiv3rse/domain/use-cases/profile").PaidFollowRequest & import("@digiv3rse/domain/use-cases/profile").UnknownFollowRequest) | (import("@digiv3rse/domain/use-cases/profile").UnknownFollowRequest & import("@digiv3rse/domain/use-cases/profile").FreeFollowRequest) | (import("@digiv3rse/domain/use-cases/profile").UnknownFollowRequest & import("@digiv3rse/domain/use-cases/profile").PaidFollowRequest);
}, {
    id: string;
    type: TransactionType.Data;
    request: UnknownObject;
}>]>;
export type TransactionSchema = z.infer<typeof TransactionSchema>;
export declare const TransactionListSchema: z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
    type: z.ZodLiteral<TransactionType.Meta>;
    chainType: z.ZodNativeEnum<typeof ChainType>;
    id: z.ZodString;
    relayerTxId: z.ZodString;
    txHash: z.ZodNullable<z.ZodString>;
    nonce: z.ZodNumber;
    request: z.ZodType<ProtocolTransactionRequest, z.ZodTypeDef, UnknownObject>;
}, "strip", z.ZodTypeAny, {
    id: string;
    type: TransactionType.Meta;
    chainType: ChainType;
    relayerTxId: string;
    txHash: string | null;
    nonce: number;
    request: import("@digiv3rse/domain/use-cases/profile").BlockProfilesRequest | import("@digiv3rse/domain/use-cases/publications").LegacyCollectRequest | import("@digiv3rse/domain/use-cases/publications").MultirecipientCollectRequest | import("@digiv3rse/domain/use-cases/publications").SimpleCollectRequest | import("@digiv3rse/domain/use-cases/publications").UnknownActionRequest | import("@digiv3rse/domain/use-cases/profile").ClaimFreeTextHandleRequest | import("@digiv3rse/domain/use-cases/profile").ClaimReservedHandleRequest | import("@digiv3rse/domain/use-cases/publications").CreateCommentRequest | import("@digiv3rse/domain/use-cases/publications").CreateMirrorRequest | import("@digiv3rse/domain/use-cases/publications").CreatePostRequest | import("@digiv3rse/domain/use-cases/publications").CreateQuoteRequest | import("@digiv3rse/domain/use-cases/profile").CreateProfileRequest | import("@digiv3rse/domain/use-cases/profile").FreeFollowRequest | import("@digiv3rse/domain/use-cases/profile").PaidFollowRequest | import("@digiv3rse/domain/use-cases/profile").UnknownFollowRequest | import("@digiv3rse/domain/use-cases/profile").UnblockProfilesRequest | import("@digiv3rse/domain/use-cases/profile").UnfollowRequest | import("@digiv3rse/domain/use-cases/profile").UpdateProfileManagersRequest | import("@digiv3rse/domain/use-cases/profile").UpdateFollowPolicyRequest | import("@digiv3rse/domain/use-cases/profile").SetProfileMetadataRequest | import("@digiv3rse/domain/use-cases/profile").LinkHandleRequest | import("@digiv3rse/domain/use-cases/profile").UnlinkHandleRequest | (import("@digiv3rse/domain/use-cases/profile").ClaimFreeTextHandleRequest & import("@digiv3rse/domain/use-cases/profile").ClaimReservedHandleRequest) | (import("@digiv3rse/domain/use-cases/profile").ClaimReservedHandleRequest & import("@digiv3rse/domain/use-cases/profile").ClaimFreeTextHandleRequest) | (import("@digiv3rse/domain/use-cases/profile").FreeFollowRequest & import("@digiv3rse/domain/use-cases/profile").PaidFollowRequest) | (import("@digiv3rse/domain/use-cases/profile").FreeFollowRequest & import("@digiv3rse/domain/use-cases/profile").UnknownFollowRequest) | (import("@digiv3rse/domain/use-cases/profile").PaidFollowRequest & import("@digiv3rse/domain/use-cases/profile").FreeFollowRequest) | (import("@digiv3rse/domain/use-cases/profile").PaidFollowRequest & import("@digiv3rse/domain/use-cases/profile").UnknownFollowRequest) | (import("@digiv3rse/domain/use-cases/profile").UnknownFollowRequest & import("@digiv3rse/domain/use-cases/profile").FreeFollowRequest) | (import("@digiv3rse/domain/use-cases/profile").UnknownFollowRequest & import("@digiv3rse/domain/use-cases/profile").PaidFollowRequest);
}, {
    id: string;
    type: TransactionType.Meta;
    chainType: ChainType;
    relayerTxId: string;
    txHash: string | null;
    nonce: number;
    request: UnknownObject;
}>, z.ZodObject<{
    type: z.ZodLiteral<TransactionType.Native>;
    chainType: z.ZodNativeEnum<typeof ChainType>;
    id: z.ZodString;
    relayerTxId: z.ZodOptional<z.ZodString>;
    txHash: z.ZodNullable<z.ZodString>;
    request: z.ZodType<AnyTransactionRequest, z.ZodTypeDef, UnknownObject>;
}, "strip", z.ZodTypeAny, {
    id: string;
    type: TransactionType.Native;
    chainType: ChainType;
    txHash: string | null;
    request: import("@digiv3rse/domain/use-cases/profile").BlockProfilesRequest | import("@digiv3rse/domain/use-cases/publications").LegacyCollectRequest | import("@digiv3rse/domain/use-cases/publications").MultirecipientCollectRequest | import("@digiv3rse/domain/use-cases/publications").SimpleCollectRequest | import("@digiv3rse/domain/use-cases/publications").UnknownActionRequest | import("@digiv3rse/domain/use-cases/profile").ClaimFreeTextHandleRequest | import("@digiv3rse/domain/use-cases/profile").ClaimReservedHandleRequest | import("@digiv3rse/domain/use-cases/publications").CreateCommentRequest | import("@digiv3rse/domain/use-cases/publications").CreateMirrorRequest | import("@digiv3rse/domain/use-cases/publications").CreatePostRequest | import("@digiv3rse/domain/use-cases/publications").CreateQuoteRequest | import("@digiv3rse/domain/use-cases/profile").CreateProfileRequest | import("@digiv3rse/domain/use-cases/profile").FreeFollowRequest | import("@digiv3rse/domain/use-cases/profile").PaidFollowRequest | import("@digiv3rse/domain/use-cases/profile").UnknownFollowRequest | import("@digiv3rse/domain/use-cases/transactions").TokenAllowanceRequest | import("@digiv3rse/domain/use-cases/profile").UnblockProfilesRequest | import("@digiv3rse/domain/use-cases/profile").UnfollowRequest | import("@digiv3rse/domain/use-cases/profile").UpdateProfileManagersRequest | import("@digiv3rse/domain/use-cases/profile").UpdateFollowPolicyRequest | import("@digiv3rse/domain/use-cases/profile").SetProfileMetadataRequest | import("@digiv3rse/domain/use-cases/profile").LinkHandleRequest | import("@digiv3rse/domain/use-cases/profile").UnlinkHandleRequest | (import("@digiv3rse/domain/use-cases/profile").ClaimFreeTextHandleRequest & import("@digiv3rse/domain/use-cases/profile").ClaimReservedHandleRequest) | (import("@digiv3rse/domain/use-cases/profile").ClaimReservedHandleRequest & import("@digiv3rse/domain/use-cases/profile").ClaimFreeTextHandleRequest) | (import("@digiv3rse/domain/use-cases/profile").FreeFollowRequest & import("@digiv3rse/domain/use-cases/profile").PaidFollowRequest) | (import("@digiv3rse/domain/use-cases/profile").FreeFollowRequest & import("@digiv3rse/domain/use-cases/profile").UnknownFollowRequest) | (import("@digiv3rse/domain/use-cases/profile").PaidFollowRequest & import("@digiv3rse/domain/use-cases/profile").FreeFollowRequest) | (import("@digiv3rse/domain/use-cases/profile").PaidFollowRequest & import("@digiv3rse/domain/use-cases/profile").UnknownFollowRequest) | (import("@digiv3rse/domain/use-cases/profile").UnknownFollowRequest & import("@digiv3rse/domain/use-cases/profile").FreeFollowRequest) | (import("@digiv3rse/domain/use-cases/profile").UnknownFollowRequest & import("@digiv3rse/domain/use-cases/profile").PaidFollowRequest);
    relayerTxId?: string | undefined;
}, {
    id: string;
    type: TransactionType.Native;
    chainType: ChainType;
    txHash: string | null;
    request: UnknownObject;
    relayerTxId?: string | undefined;
}>, z.ZodObject<{
    type: z.ZodLiteral<TransactionType.Data>;
    id: z.ZodString;
    request: z.ZodType<ProtocolTransactionRequest, z.ZodTypeDef, UnknownObject>;
}, "strip", z.ZodTypeAny, {
    id: string;
    type: TransactionType.Data;
    request: import("@digiv3rse/domain/use-cases/profile").BlockProfilesRequest | import("@digiv3rse/domain/use-cases/publications").LegacyCollectRequest | import("@digiv3rse/domain/use-cases/publications").MultirecipientCollectRequest | import("@digiv3rse/domain/use-cases/publications").SimpleCollectRequest | import("@digiv3rse/domain/use-cases/publications").UnknownActionRequest | import("@digiv3rse/domain/use-cases/profile").ClaimFreeTextHandleRequest | import("@digiv3rse/domain/use-cases/profile").ClaimReservedHandleRequest | import("@digiv3rse/domain/use-cases/publications").CreateCommentRequest | import("@digiv3rse/domain/use-cases/publications").CreateMirrorRequest | import("@digiv3rse/domain/use-cases/publications").CreatePostRequest | import("@digiv3rse/domain/use-cases/publications").CreateQuoteRequest | import("@digiv3rse/domain/use-cases/profile").CreateProfileRequest | import("@digiv3rse/domain/use-cases/profile").FreeFollowRequest | import("@digiv3rse/domain/use-cases/profile").PaidFollowRequest | import("@digiv3rse/domain/use-cases/profile").UnknownFollowRequest | import("@digiv3rse/domain/use-cases/profile").UnblockProfilesRequest | import("@digiv3rse/domain/use-cases/profile").UnfollowRequest | import("@digiv3rse/domain/use-cases/profile").UpdateProfileManagersRequest | import("@digiv3rse/domain/use-cases/profile").UpdateFollowPolicyRequest | import("@digiv3rse/domain/use-cases/profile").SetProfileMetadataRequest | import("@digiv3rse/domain/use-cases/profile").LinkHandleRequest | import("@digiv3rse/domain/use-cases/profile").UnlinkHandleRequest | (import("@digiv3rse/domain/use-cases/profile").ClaimFreeTextHandleRequest & import("@digiv3rse/domain/use-cases/profile").ClaimReservedHandleRequest) | (import("@digiv3rse/domain/use-cases/profile").ClaimReservedHandleRequest & import("@digiv3rse/domain/use-cases/profile").ClaimFreeTextHandleRequest) | (import("@digiv3rse/domain/use-cases/profile").FreeFollowRequest & import("@digiv3rse/domain/use-cases/profile").PaidFollowRequest) | (import("@digiv3rse/domain/use-cases/profile").FreeFollowRequest & import("@digiv3rse/domain/use-cases/profile").UnknownFollowRequest) | (import("@digiv3rse/domain/use-cases/profile").PaidFollowRequest & import("@digiv3rse/domain/use-cases/profile").FreeFollowRequest) | (import("@digiv3rse/domain/use-cases/profile").PaidFollowRequest & import("@digiv3rse/domain/use-cases/profile").UnknownFollowRequest) | (import("@digiv3rse/domain/use-cases/profile").UnknownFollowRequest & import("@digiv3rse/domain/use-cases/profile").FreeFollowRequest) | (import("@digiv3rse/domain/use-cases/profile").UnknownFollowRequest & import("@digiv3rse/domain/use-cases/profile").PaidFollowRequest);
}, {
    id: string;
    type: TransactionType.Data;
    request: UnknownObject;
}>]>, "many">;
export type TransactionListSchema = typeof TransactionListSchema;
export type TransactionList = z.infer<typeof TransactionListSchema>;
