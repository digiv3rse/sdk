import { ApolloCache, NormalizedCacheObject } from '@apollo/client';
import { ContentInsightMatcher } from './utils/ContentInsight';
type TypePoliciesArgs = {
    /**
     * A list of ContentInsightMatcher used to extract insights from publication metadata content
     */
    contentMatchers?: ContentInsightMatcher[];
};
export declare function createDiGiCache(args?: TypePoliciesArgs): ApolloCache<NormalizedCacheObject>;
export {};
