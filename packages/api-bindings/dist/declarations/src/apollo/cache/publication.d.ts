import { FieldFunctionOptions, FieldPolicy, FieldReadFunction, Reference, StoreObject } from '@apollo/client';
import { AnyPublication, CollectPolicy, ContentInsight, PublicationQueryRequest, ReferencePolicy, Wallet } from '../../digi';
import { ContentInsightMatcher } from './utils/ContentInsight';
export type ContentPublicationTypePolicyConfig = {
    /**
     * A list of ContentInsightMatcher used to extract insights from publication metadata content
     */
    contentMatchers: ContentInsightMatcher[];
};
export declare function createPublicationTypePolicy(): {
    readonly keyFields: ({ id }: Readonly<StoreObject>) => string;
};
declare function createContentPublicationTypePolicy(config: ContentPublicationTypePolicyConfig): {
    fields: {
        canComment: FieldPolicy<any, any, any, FieldFunctionOptions<Record<string, any>, Record<string, any>>>;
        canDecrypt: FieldPolicy<any, any, any, FieldFunctionOptions<Record<string, any>, Record<string, any>>>;
        canMirror: FieldPolicy<any, any, any, FieldFunctionOptions<Record<string, any>, Record<string, any>>>;
        collectedBy: FieldPolicy<Wallet, Wallet, Wallet, FieldFunctionOptions<Record<string, any>, Record<string, any>>>;
        collectPolicy: (existing: CollectPolicy | undefined, { readField }: FieldFunctionOptions<Record<string, any>, Record<string, any>>) => CollectPolicy;
        contentInsight: FieldReadFunction<ContentInsight, ContentInsight, FieldFunctionOptions<Record<string, any>, Record<string, any>>>;
        decryptionCriteria: FieldReadFunction<any, any, FieldFunctionOptions<Record<string, any>, Record<string, any>>>;
        hasCollectedByMe: (existing: boolean, { readField }: FieldFunctionOptions<Record<string, any>, Record<string, any>>) => boolean;
        hasOptimisticCollectedByMe: FieldReadFunction<boolean, boolean, FieldFunctionOptions<Record<string, any>, Record<string, any>>>;
        isMirroredByMe: (existing: boolean | undefined, { readField }: FieldFunctionOptions<Record<string, any>, Record<string, any>>) => boolean;
        isOptimisticMirroredByMe: FieldReadFunction<boolean, boolean, FieldFunctionOptions<Record<string, any>, Record<string, any>>>;
        mirrors: FieldPolicy<any, any, any, FieldFunctionOptions<Record<string, any>, Record<string, any>>>;
        notInterested: FieldPolicy<any, any, any, FieldFunctionOptions<Record<string, any>, Record<string, any>>>;
        bookmarked: FieldPolicy<any, any, any, FieldFunctionOptions<Record<string, any>, Record<string, any>>>;
        reaction: FieldPolicy<any, any, any, FieldFunctionOptions<Record<string, any>, Record<string, any>>>;
        referencePolicy: FieldReadFunction<ReferencePolicy, ReferencePolicy, FieldFunctionOptions<Record<string, any>, Record<string, any>>>;
        stats: FieldPolicy<any, any, any, FieldFunctionOptions<Record<string, any>, Record<string, any>>>;
        observedBy: FieldReadFunction<import("@digiv3rse/domain/entities").ProfileId | null, import("@digiv3rse/domain/entities").ProfileId | null, FieldFunctionOptions<Record<string, any>, Record<string, any>>>;
    };
};
export declare const createCommentTypePolicy: typeof createContentPublicationTypePolicy;
export declare const createPostTypePolicy: typeof createContentPublicationTypePolicy;
export declare function createPublicationFieldPolicy(): FieldPolicy<AnyPublication, AnyPublication, Reference, FieldFunctionOptions<{
    request: PublicationQueryRequest;
}>>;
export {};
