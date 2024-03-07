import { TypePolicy } from '@apollo/client';
/**
 * Use this to declare a type policy for an object that should not be normalized.
 * Non-normalized objects are embedded within their parent object in the cache.
 *
 * See https://www.apollographql.com/docs/react/caching/cache-configuration/#disabling-normalization
 *
 * @returns a TypePolicy that does not cache the result of the field
 */
export declare function notNormalizedType(others?: Omit<TypePolicy, 'keyFields'>): {
    readonly fields?: {
        [fieldName: string]: import("@apollo/client").FieldPolicy<any, any, any, import("@apollo/client").FieldFunctionOptions<Record<string, any>, Record<string, any>>> | import("@apollo/client").FieldReadFunction<any, any, import("@apollo/client").FieldFunctionOptions<Record<string, any>, Record<string, any>>>;
    } | undefined;
    readonly merge?: boolean | import("@apollo/client").FieldMergeFunction<any, any, import("@apollo/client").FieldFunctionOptions<Record<string, any>, Record<string, any>>> | undefined;
    readonly queryType?: true | undefined;
    readonly mutationType?: true | undefined;
    readonly subscriptionType?: true | undefined;
    readonly keyFields: false;
};
