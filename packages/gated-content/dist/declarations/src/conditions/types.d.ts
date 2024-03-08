import { EvmAddress } from '@digiv3rse/shared-kernel';
export declare enum LitScalarOperator {
    EQUAL = "=",
    NOT_EQUAL = "!=",
    GREATER_THAN = ">",
    GREATER_THAN_OR_EQUAL = ">=",
    LESS_THAN = "<",
    LESS_THAN_OR_EQUAL = "<="
}
export declare enum LitConditionType {
    EVM_BASIC = "evmBasic",
    EVM_CONTRACT = "evmContract"
}
export declare enum LitOperatorType {
    AND = "and",
    OR = "or"
}
export type LitOperator = {
    operator: LitOperatorType;
};
export declare enum LitKnownMethods {
    OWNER_OF = "ownerOf",
    BALANCE_OF = "balanceOf",
    BALANCE_OF_BATCH = "balanceOfBatch",
    HAS_ACCESS = "hasAccess",
    IS_FOLLOWING = "isFollowing",
    HAS_COLLECTED = "hasCollected"
}
export declare enum LitKnownParams {
    USER_ADDRESS = ":userAddress",
    ZERO = "0"
}
export declare enum LitContractType {
    ERC20 = "ERC20",
    ERC721 = "ERC721",
    ERC1155 = "ERC1155"
}
export declare enum SupportedChains {
    ETHEREUM = "ethereum",
    POLYGON = "polygon",
    MUMBAI = "mumbai",
    LINEA_GOERLI = "lineaGoerli"
}
export declare enum SupportedChainId {
    ETHEREUM = 1,
    POLYGON = 137,
    MUMBAI = 80001,
    LINEA_GOERLI = 59140
}
export declare function isSupportedChainId(chainId: number): chainId is SupportedChainId;
export type LitAccessCondition = {
    conditionType: LitConditionType;
    contractAddress: string;
    standardContractType: LitContractType | '';
    chain: SupportedChains;
    method: LitKnownMethods | '';
    parameters: string[];
    returnValueTest: {
        comparator: LitScalarOperator;
        value: LitKnownParams | string;
    };
};
export type LitEvmAccessCondition = {
    conditionType: LitConditionType;
    contractAddress: string;
    functionName: string;
    functionParams: Array<string>;
    functionAbi: object;
    chain: SupportedChains;
    returnValueTest: {
        key: string;
        comparator: LitScalarOperator;
        value: LitKnownParams | string;
    };
};
export type LitAccessControlCondition = LitAccessCondition | LitEvmAccessCondition | LitOperator;
export type LitNestedAccessControlCondition<T> = T | Array<LitNestedAccessControlCondition<T>>;
export type DecryptionContext = {
    /**
     * Identifies the Profile ID of the user who is trying to decrypt the metadata.
     *
     * This is used to determine whether the user has access to the metadata.
     * The {@link Signer} provided in the constructor MUST be the owner OR
     * an authorized Profile Manager of the specified Profile.
     */
    profileId?: string;
};
/**
 * @internal
 */
export type AccessControlContract = {
    address: EvmAddress;
    chainId: SupportedChainId;
};
