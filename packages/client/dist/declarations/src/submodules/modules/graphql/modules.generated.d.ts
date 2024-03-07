import * as Types from "../../../graphql/types.generated.js";
import { NetworkAddressFragment, AmountFragment, Erc20Fragment, PaginatedResultInfoFragment } from "../../../graphql/fragments.generated.js";
import { GraphQLClient } from 'graphql-request';
import { GraphQLClientRequestHeaders } from 'graphql-request/build/cjs/types';
import { DocumentNode } from 'graphql';
export type ModuleInfoFragment = {
    name: string;
    type: string;
};
export type KnownSupportedModuleFragment = {
    moduleName: string;
    contract: NetworkAddressFragment;
    moduleInput: Array<ModuleInfoFragment>;
    redeemInput: Array<ModuleInfoFragment>;
    returnDataInput: Array<ModuleInfoFragment>;
};
export type UnknownSupportedModuleFragment = {
    moduleName: string;
    contract: NetworkAddressFragment;
};
export type ApprovedAllowanceAmountResultFragment = {
    moduleName: string;
    moduleContract: NetworkAddressFragment;
    allowance: AmountFragment;
};
export type GenerateModuleCurrencyApprovalResultFragment = {
    to: string;
    from: string;
    data: string;
};
export type CurrenciesQueryVariables = Types.Exact<{
    request: Types.PaginatedOffsetRequest;
}>;
export type CurrenciesQuery = {
    result: {
        items: Array<Erc20Fragment>;
        pageInfo: PaginatedResultInfoFragment;
    };
};
export type ApprovedModuleAllowanceAmountQueryVariables = Types.Exact<{
    request: Types.ApprovedModuleAllowanceAmountRequest;
    rateRequest: Types.RateRequest;
}>;
export type ApprovedModuleAllowanceAmountQuery = {
    result: Array<ApprovedAllowanceAmountResultFragment>;
};
export type GenerateModuleCurrencyApprovalDataQueryVariables = Types.Exact<{
    request: Types.GenerateModuleCurrencyApprovalDataRequest;
}>;
export type GenerateModuleCurrencyApprovalDataQuery = {
    result: GenerateModuleCurrencyApprovalResultFragment;
};
export type SupportedFollowModulesQueryVariables = Types.Exact<{
    request: Types.SupportedModulesRequest;
}>;
export type SupportedFollowModulesQuery = {
    result: {
        items: Array<KnownSupportedModuleFragment | UnknownSupportedModuleFragment>;
        pageInfo: PaginatedResultInfoFragment;
    };
};
export type SupportedReferenceModulesQueryVariables = Types.Exact<{
    request: Types.SupportedModulesRequest;
}>;
export type SupportedReferenceModulesQuery = {
    result: {
        items: Array<KnownSupportedModuleFragment | UnknownSupportedModuleFragment>;
        pageInfo: PaginatedResultInfoFragment;
    };
};
export type SupportedOpenActionModulesQueryVariables = Types.Exact<{
    request: Types.SupportedModulesRequest;
}>;
export type SupportedOpenActionModulesQuery = {
    result: {
        items: Array<KnownSupportedModuleFragment | UnknownSupportedModuleFragment>;
        pageInfo: PaginatedResultInfoFragment;
    };
};
export type SupportedOpenActionCollectModulesQueryVariables = Types.Exact<{
    request: Types.SupportedModulesRequest;
}>;
export type SupportedOpenActionCollectModulesQuery = {
    result: {
        items: Array<KnownSupportedModuleFragment | UnknownSupportedModuleFragment>;
        pageInfo: PaginatedResultInfoFragment;
    };
};
export type ModuleMetadataResultFragment = {
    moduleType: Types.ModuleType;
    signlessApproved: boolean;
    sponsoredApproved: boolean;
    verified: boolean;
    metadata: {
        authors: Array<string>;
        description: string;
        initializeCalldataABI: string;
        initializeResultDataABI: string | null;
        name: string;
        processCalldataABI: string;
        title: string;
        attributes: Array<{
            type: Types.MetadataAttributeType;
            key: string;
            value: string;
        }>;
    };
};
export type ModuleMetadataQueryVariables = Types.Exact<{
    request: Types.ModuleMetadataRequest;
}>;
export type ModuleMetadataQuery = {
    result: ModuleMetadataResultFragment | null;
};
export declare const ModuleInfoFragmentDoc: DocumentNode;
export declare const KnownSupportedModuleFragmentDoc: DocumentNode;
export declare const UnknownSupportedModuleFragmentDoc: DocumentNode;
export declare const ApprovedAllowanceAmountResultFragmentDoc: DocumentNode;
export declare const GenerateModuleCurrencyApprovalResultFragmentDoc: DocumentNode;
export declare const ModuleMetadataResultFragmentDoc: DocumentNode;
export declare const CurrenciesDocument: DocumentNode;
export declare const ApprovedModuleAllowanceAmountDocument: DocumentNode;
export declare const GenerateModuleCurrencyApprovalDataDocument: DocumentNode;
export declare const SupportedFollowModulesDocument: DocumentNode;
export declare const SupportedReferenceModulesDocument: DocumentNode;
export declare const SupportedOpenActionModulesDocument: DocumentNode;
export declare const SupportedOpenActionCollectModulesDocument: DocumentNode;
export declare const ModuleMetadataDocument: DocumentNode;
export type SdkFunctionWrapper = <T>(action: (requestHeaders?: Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;
export declare function getSdk(client: GraphQLClient, withWrapper?: SdkFunctionWrapper): {
    Currencies(variables: CurrenciesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{
        data: CurrenciesQuery;
        extensions?: any;
        headers: Dom.Headers;
        status: number;
    }>;
    ApprovedModuleAllowanceAmount(variables: ApprovedModuleAllowanceAmountQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{
        data: ApprovedModuleAllowanceAmountQuery;
        extensions?: any;
        headers: Dom.Headers;
        status: number;
    }>;
    GenerateModuleCurrencyApprovalData(variables: GenerateModuleCurrencyApprovalDataQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{
        data: GenerateModuleCurrencyApprovalDataQuery;
        extensions?: any;
        headers: Dom.Headers;
        status: number;
    }>;
    SupportedFollowModules(variables: SupportedFollowModulesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{
        data: SupportedFollowModulesQuery;
        extensions?: any;
        headers: Dom.Headers;
        status: number;
    }>;
    SupportedReferenceModules(variables: SupportedReferenceModulesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{
        data: SupportedReferenceModulesQuery;
        extensions?: any;
        headers: Dom.Headers;
        status: number;
    }>;
    SupportedOpenActionModules(variables: SupportedOpenActionModulesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{
        data: SupportedOpenActionModulesQuery;
        extensions?: any;
        headers: Dom.Headers;
        status: number;
    }>;
    SupportedOpenActionCollectModules(variables: SupportedOpenActionCollectModulesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{
        data: SupportedOpenActionCollectModulesQuery;
        extensions?: any;
        headers: Dom.Headers;
        status: number;
    }>;
    ModuleMetadata(variables: ModuleMetadataQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{
        data: ModuleMetadataQuery;
        extensions?: any;
        headers: Dom.Headers;
        status: number;
    }>;
};
export type Sdk = ReturnType<typeof getSdk>;
