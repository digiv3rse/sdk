import type { EventFragment, FunctionFragment, Result } from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from 'ethers';
import type { OnEvent, PromiseOrValue, TypedEvent, TypedEventFilter, TypedListener } from "./common.js";
export declare namespace Types {
    type MigrationParamsStruct = {
        digiHandlesAddress: PromiseOrValue<string>;
        tokenHandleRegistryAddress: PromiseOrValue<string>;
        legacyFeeFollowModule: PromiseOrValue<string>;
        legacyProfileFollowModule: PromiseOrValue<string>;
        newFeeFollowModule: PromiseOrValue<string>;
        migrationAdmin: PromiseOrValue<string>;
    };
    type MigrationParamsStructOutput = [string, string, string, string, string, string] & {
        digiHandlesAddress: string;
        tokenHandleRegistryAddress: string;
        legacyFeeFollowModule: string;
        legacyProfileFollowModule: string;
        newFeeFollowModule: string;
        migrationAdmin: string;
    };
    type PublicationActionParamsStruct = {
        publicationActedProfileId: PromiseOrValue<BigNumberish>;
        publicationActedId: PromiseOrValue<BigNumberish>;
        actorProfileId: PromiseOrValue<BigNumberish>;
        referrerProfileIds: PromiseOrValue<BigNumberish>[];
        referrerPubIds: PromiseOrValue<BigNumberish>[];
        actionModuleAddress: PromiseOrValue<string>;
        actionModuleData: PromiseOrValue<BytesLike>;
    };
    type PublicationActionParamsStructOutput = [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber[],
        BigNumber[],
        string,
        string
    ] & {
        publicationActedProfileId: BigNumber;
        publicationActedId: BigNumber;
        actorProfileId: BigNumber;
        referrerProfileIds: BigNumber[];
        referrerPubIds: BigNumber[];
        actionModuleAddress: string;
        actionModuleData: string;
    };
    type EIP712SignatureStruct = {
        signer: PromiseOrValue<string>;
        v: PromiseOrValue<BigNumberish>;
        r: PromiseOrValue<BytesLike>;
        s: PromiseOrValue<BytesLike>;
        deadline: PromiseOrValue<BigNumberish>;
    };
    type EIP712SignatureStructOutput = [string, number, string, string, BigNumber] & {
        signer: string;
        v: number;
        r: string;
        s: string;
        deadline: BigNumber;
    };
    type CollectParamsStruct = {
        publicationCollectedProfileId: PromiseOrValue<BigNumberish>;
        publicationCollectedId: PromiseOrValue<BigNumberish>;
        collectorProfileId: PromiseOrValue<BigNumberish>;
        referrerProfileId: PromiseOrValue<BigNumberish>;
        referrerPubId: PromiseOrValue<BigNumberish>;
        collectModuleData: PromiseOrValue<BytesLike>;
    };
    type CollectParamsStructOutput = [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        string
    ] & {
        publicationCollectedProfileId: BigNumber;
        publicationCollectedId: BigNumber;
        collectorProfileId: BigNumber;
        referrerProfileId: BigNumber;
        referrerPubId: BigNumber;
        collectModuleData: string;
    };
    type CommentParamsStruct = {
        profileId: PromiseOrValue<BigNumberish>;
        contentURI: PromiseOrValue<string>;
        pointedProfileId: PromiseOrValue<BigNumberish>;
        pointedPubId: PromiseOrValue<BigNumberish>;
        referrerProfileIds: PromiseOrValue<BigNumberish>[];
        referrerPubIds: PromiseOrValue<BigNumberish>[];
        referenceModuleData: PromiseOrValue<BytesLike>;
        actionModules: PromiseOrValue<string>[];
        actionModulesInitDatas: PromiseOrValue<BytesLike>[];
        referenceModule: PromiseOrValue<string>;
        referenceModuleInitData: PromiseOrValue<BytesLike>;
    };
    type CommentParamsStructOutput = [
        BigNumber,
        string,
        BigNumber,
        BigNumber,
        BigNumber[],
        BigNumber[],
        string,
        string[],
        string[],
        string,
        string
    ] & {
        profileId: BigNumber;
        contentURI: string;
        pointedProfileId: BigNumber;
        pointedPubId: BigNumber;
        referrerProfileIds: BigNumber[];
        referrerPubIds: BigNumber[];
        referenceModuleData: string;
        actionModules: string[];
        actionModulesInitDatas: string[];
        referenceModule: string;
        referenceModuleInitData: string;
    };
    type CreateProfileParamsStruct = {
        to: PromiseOrValue<string>;
        followModule: PromiseOrValue<string>;
        followModuleInitData: PromiseOrValue<BytesLike>;
    };
    type CreateProfileParamsStructOutput = [string, string, string] & {
        to: string;
        followModule: string;
        followModuleInitData: string;
    };
    type ActionModuleWhitelistDataStruct = {
        id: PromiseOrValue<BigNumberish>;
        isWhitelisted: PromiseOrValue<boolean>;
    };
    type ActionModuleWhitelistDataStructOutput = [BigNumber, boolean] & {
        id: BigNumber;
        isWhitelisted: boolean;
    };
    type ProfileStruct = {
        pubCount: PromiseOrValue<BigNumberish>;
        followModule: PromiseOrValue<string>;
        followNFT: PromiseOrValue<string>;
        __DEPRECATED__handle: PromiseOrValue<string>;
        __DEPRECATED__imageURI: PromiseOrValue<string>;
        __DEPRECATED__followNFTURI: PromiseOrValue<string>;
        metadataURI: PromiseOrValue<string>;
    };
    type ProfileStructOutput = [BigNumber, string, string, string, string, string, string] & {
        pubCount: BigNumber;
        followModule: string;
        followNFT: string;
        __DEPRECATED__handle: string;
        __DEPRECATED__imageURI: string;
        __DEPRECATED__followNFTURI: string;
        metadataURI: string;
    };
    type PublicationStruct = {
        pointedProfileId: PromiseOrValue<BigNumberish>;
        pointedPubId: PromiseOrValue<BigNumberish>;
        contentURI: PromiseOrValue<string>;
        referenceModule: PromiseOrValue<string>;
        __DEPRECATED__collectModule: PromiseOrValue<string>;
        __DEPRECATED__collectNFT: PromiseOrValue<string>;
        pubType: PromiseOrValue<BigNumberish>;
        rootProfileId: PromiseOrValue<BigNumberish>;
        rootPubId: PromiseOrValue<BigNumberish>;
        enabledActionModulesBitmap: PromiseOrValue<BigNumberish>;
    };
    type PublicationStructOutput = [
        BigNumber,
        BigNumber,
        string,
        string,
        string,
        string,
        number,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        pointedProfileId: BigNumber;
        pointedPubId: BigNumber;
        contentURI: string;
        referenceModule: string;
        __DEPRECATED__collectModule: string;
        __DEPRECATED__collectNFT: string;
        pubType: number;
        rootProfileId: BigNumber;
        rootPubId: BigNumber;
        enabledActionModulesBitmap: BigNumber;
    };
    type MirrorParamsStruct = {
        profileId: PromiseOrValue<BigNumberish>;
        metadataURI: PromiseOrValue<string>;
        pointedProfileId: PromiseOrValue<BigNumberish>;
        pointedPubId: PromiseOrValue<BigNumberish>;
        referrerProfileIds: PromiseOrValue<BigNumberish>[];
        referrerPubIds: PromiseOrValue<BigNumberish>[];
        referenceModuleData: PromiseOrValue<BytesLike>;
    };
    type MirrorParamsStructOutput = [
        BigNumber,
        string,
        BigNumber,
        BigNumber,
        BigNumber[],
        BigNumber[],
        string
    ] & {
        profileId: BigNumber;
        metadataURI: string;
        pointedProfileId: BigNumber;
        pointedPubId: BigNumber;
        referrerProfileIds: BigNumber[];
        referrerPubIds: BigNumber[];
        referenceModuleData: string;
    };
    type PostParamsStruct = {
        profileId: PromiseOrValue<BigNumberish>;
        contentURI: PromiseOrValue<string>;
        actionModules: PromiseOrValue<string>[];
        actionModulesInitDatas: PromiseOrValue<BytesLike>[];
        referenceModule: PromiseOrValue<string>;
        referenceModuleInitData: PromiseOrValue<BytesLike>;
    };
    type PostParamsStructOutput = [BigNumber, string, string[], string[], string, string] & {
        profileId: BigNumber;
        contentURI: string;
        actionModules: string[];
        actionModulesInitDatas: string[];
        referenceModule: string;
        referenceModuleInitData: string;
    };
    type QuoteParamsStruct = {
        profileId: PromiseOrValue<BigNumberish>;
        contentURI: PromiseOrValue<string>;
        pointedProfileId: PromiseOrValue<BigNumberish>;
        pointedPubId: PromiseOrValue<BigNumberish>;
        referrerProfileIds: PromiseOrValue<BigNumberish>[];
        referrerPubIds: PromiseOrValue<BigNumberish>[];
        referenceModuleData: PromiseOrValue<BytesLike>;
        actionModules: PromiseOrValue<string>[];
        actionModulesInitDatas: PromiseOrValue<BytesLike>[];
        referenceModule: PromiseOrValue<string>;
        referenceModuleInitData: PromiseOrValue<BytesLike>;
    };
    type QuoteParamsStructOutput = [
        BigNumber,
        string,
        BigNumber,
        BigNumber,
        BigNumber[],
        BigNumber[],
        string,
        string[],
        string[],
        string,
        string
    ] & {
        profileId: BigNumber;
        contentURI: string;
        pointedProfileId: BigNumber;
        pointedPubId: BigNumber;
        referrerProfileIds: BigNumber[];
        referrerPubIds: BigNumber[];
        referenceModuleData: string;
        actionModules: string[];
        actionModulesInitDatas: string[];
        referenceModule: string;
        referenceModuleInitData: string;
    };
    type TokenDataStruct = {
        owner: PromiseOrValue<string>;
        mintTimestamp: PromiseOrValue<BigNumberish>;
    };
    type TokenDataStructOutput = [string, BigNumber] & {
        owner: string;
        mintTimestamp: BigNumber;
    };
}
export interface DiGiHubInterface extends utils.Interface {
    functions: {
        'DANGER__disableTokenGuardian()': FunctionFragment;
        'act((uint256,uint256,uint256,uint256[],uint256[],address,bytes))': FunctionFragment;
        'actWithSig((uint256,uint256,uint256,uint256[],uint256[],address,bytes),(address,uint8,bytes32,bytes32,uint256))': FunctionFragment;
        'approve(address,uint256)': FunctionFragment;
        'balanceOf(address)': FunctionFragment;
        'batchMigrateFollowModules(uint256[])': FunctionFragment;
        'batchMigrateFollowers(uint256[],uint256,uint256[])': FunctionFragment;
        'batchMigrateFollows(uint256,uint256[],uint256[])': FunctionFragment;
        'batchMigrateProfiles(uint256[])': FunctionFragment;
        'burn(uint256)': FunctionFragment;
        'changeDelegatedExecutorsConfig(uint256,address[],bool[],uint64,bool)': FunctionFragment;
        'changeDelegatedExecutorsConfig(uint256,address[],bool[])': FunctionFragment;
        'changeDelegatedExecutorsConfigWithSig(uint256,address[],bool[],uint64,bool,(address,uint8,bytes32,bytes32,uint256))': FunctionFragment;
        'collect((uint256,uint256,uint256,uint256,uint256,bytes))': FunctionFragment;
        'collectWithSig((uint256,uint256,uint256,uint256,uint256,bytes),(address,uint8,bytes32,bytes32,uint256))': FunctionFragment;
        'comment((uint256,string,uint256,uint256,uint256[],uint256[],bytes,address[],bytes[],address,bytes))': FunctionFragment;
        'commentWithSig((uint256,string,uint256,uint256,uint256[],uint256[],bytes,address[],bytes[],address,bytes),(address,uint8,bytes32,bytes32,uint256))': FunctionFragment;
        'createProfile((address,address,bytes))': FunctionFragment;
        'emitCollectNFTTransferEvent(uint256,uint256,uint256,address,address)': FunctionFragment;
        'emitUnfollowedEvent(uint256,uint256,address)': FunctionFragment;
        'enableTokenGuardian()': FunctionFragment;
        'exists(uint256)': FunctionFragment;
        'follow(uint256,uint256[],uint256[],bytes[])': FunctionFragment;
        'followWithSig(uint256,uint256[],uint256[],bytes[],(address,uint8,bytes32,bytes32,uint256))': FunctionFragment;
        'getActionModuleById(uint256)': FunctionFragment;
        'getActionModuleWhitelistData(address)': FunctionFragment;
        'getApproved(uint256)': FunctionFragment;
        'getCollectNFTImpl()': FunctionFragment;
        'getContentURI(uint256,uint256)': FunctionFragment;
        'getDelegatedExecutorsConfigNumber(uint256)': FunctionFragment;
        'getDelegatedExecutorsMaxConfigNumberSet(uint256)': FunctionFragment;
        'getDelegatedExecutorsPrevConfigNumber(uint256)': FunctionFragment;
        'getDomainSeparator()': FunctionFragment;
        'getFollowNFTImpl()': FunctionFragment;
        'getGovernance()': FunctionFragment;
        'getProfile(uint256)': FunctionFragment;
        'getProfileIdByHandleHash(bytes32)': FunctionFragment;
        'getPublication(uint256,uint256)': FunctionFragment;
        'getPublicationType(uint256,uint256)': FunctionFragment;
        'getState()': FunctionFragment;
        'getTokenGuardianDisablingTimestamp(address)': FunctionFragment;
        'isApprovedForAll(address,address)': FunctionFragment;
        'isBlocked(uint256,uint256)': FunctionFragment;
        'isDelegatedExecutorApproved(uint256,address)': FunctionFragment;
        'isDelegatedExecutorApproved(uint256,address,uint64)': FunctionFragment;
        'isFollowModuleWhitelisted(address)': FunctionFragment;
        'isFollowing(uint256,uint256)': FunctionFragment;
        'isProfileCreatorWhitelisted(address)': FunctionFragment;
        'isReferenceModuleWhitelisted(address)': FunctionFragment;
        'mintTimestampOf(uint256)': FunctionFragment;
        'mirror((uint256,string,uint256,uint256,uint256[],uint256[],bytes))': FunctionFragment;
        'mirrorWithSig((uint256,string,uint256,uint256,uint256[],uint256[],bytes),(address,uint8,bytes32,bytes32,uint256))': FunctionFragment;
        'name()': FunctionFragment;
        'nonces(address)': FunctionFragment;
        'ownerOf(uint256)': FunctionFragment;
        'post((uint256,string,address[],bytes[],address,bytes))': FunctionFragment;
        'postWithSig((uint256,string,address[],bytes[],address,bytes),(address,uint8,bytes32,bytes32,uint256))': FunctionFragment;
        'quote((uint256,string,uint256,uint256,uint256[],uint256[],bytes,address[],bytes[],address,bytes))': FunctionFragment;
        'quoteWithSig((uint256,string,uint256,uint256,uint256[],uint256[],bytes,address[],bytes[],address,bytes),(address,uint8,bytes32,bytes32,uint256))': FunctionFragment;
        'royaltyInfo(uint256,uint256)': FunctionFragment;
        'safeTransferFrom(address,address,uint256)': FunctionFragment;
        'safeTransferFrom(address,address,uint256,bytes)': FunctionFragment;
        'setApprovalForAll(address,bool)': FunctionFragment;
        'setBlockStatus(uint256,uint256[],bool[])': FunctionFragment;
        'setBlockStatusWithSig(uint256,uint256[],bool[],(address,uint8,bytes32,bytes32,uint256))': FunctionFragment;
        'setEmergencyAdmin(address)': FunctionFragment;
        'setFollowModule(uint256,address,bytes)': FunctionFragment;
        'setFollowModuleWithSig(uint256,address,bytes,(address,uint8,bytes32,bytes32,uint256))': FunctionFragment;
        'setGovernance(address)': FunctionFragment;
        'setMigrationAdmins(address[],bool)': FunctionFragment;
        'setProfileMetadataURI(uint256,string)': FunctionFragment;
        'setProfileMetadataURIWithSig(uint256,string,(address,uint8,bytes32,bytes32,uint256))': FunctionFragment;
        'setRoyalty(uint256)': FunctionFragment;
        'setState(uint8)': FunctionFragment;
        'supportsInterface(bytes4)': FunctionFragment;
        'symbol()': FunctionFragment;
        'tokenDataOf(uint256)': FunctionFragment;
        'tokenURI(uint256)': FunctionFragment;
        'totalSupply()': FunctionFragment;
        'transferFrom(address,address,uint256)': FunctionFragment;
        'unfollow(uint256,uint256[])': FunctionFragment;
        'unfollowWithSig(uint256,uint256[],(address,uint8,bytes32,bytes32,uint256))': FunctionFragment;
        'whitelistActionModule(address,bool)': FunctionFragment;
        'whitelistFollowModule(address,bool)': FunctionFragment;
        'whitelistProfileCreator(address,bool)': FunctionFragment;
        'whitelistReferenceModule(address,bool)': FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: 'DANGER__disableTokenGuardian' | 'act' | 'actWithSig' | 'approve' | 'balanceOf' | 'batchMigrateFollowModules' | 'batchMigrateFollowers' | 'batchMigrateFollows' | 'batchMigrateProfiles' | 'burn' | 'changeDelegatedExecutorsConfig(uint256,address[],bool[],uint64,bool)' | 'changeDelegatedExecutorsConfig(uint256,address[],bool[])' | 'changeDelegatedExecutorsConfigWithSig' | 'collect' | 'collectWithSig' | 'comment' | 'commentWithSig' | 'createProfile' | 'emitCollectNFTTransferEvent' | 'emitUnfollowedEvent' | 'enableTokenGuardian' | 'exists' | 'follow' | 'followWithSig' | 'getActionModuleById' | 'getActionModuleWhitelistData' | 'getApproved' | 'getCollectNFTImpl' | 'getContentURI' | 'getDelegatedExecutorsConfigNumber' | 'getDelegatedExecutorsMaxConfigNumberSet' | 'getDelegatedExecutorsPrevConfigNumber' | 'getDomainSeparator' | 'getFollowNFTImpl' | 'getGovernance' | 'getProfile' | 'getProfileIdByHandleHash' | 'getPublication' | 'getPublicationType' | 'getState' | 'getTokenGuardianDisablingTimestamp' | 'isApprovedForAll' | 'isBlocked' | 'isDelegatedExecutorApproved(uint256,address)' | 'isDelegatedExecutorApproved(uint256,address,uint64)' | 'isFollowModuleWhitelisted' | 'isFollowing' | 'isProfileCreatorWhitelisted' | 'isReferenceModuleWhitelisted' | 'mintTimestampOf' | 'mirror' | 'mirrorWithSig' | 'name' | 'nonces' | 'ownerOf' | 'post' | 'postWithSig' | 'quote' | 'quoteWithSig' | 'royaltyInfo' | 'safeTransferFrom(address,address,uint256)' | 'safeTransferFrom(address,address,uint256,bytes)' | 'setApprovalForAll' | 'setBlockStatus' | 'setBlockStatusWithSig' | 'setEmergencyAdmin' | 'setFollowModule' | 'setFollowModuleWithSig' | 'setGovernance' | 'setMigrationAdmins' | 'setProfileMetadataURI' | 'setProfileMetadataURIWithSig' | 'setRoyalty' | 'setState' | 'supportsInterface' | 'symbol' | 'tokenDataOf' | 'tokenURI' | 'totalSupply' | 'transferFrom' | 'unfollow' | 'unfollowWithSig' | 'whitelistActionModule' | 'whitelistFollowModule' | 'whitelistProfileCreator' | 'whitelistReferenceModule'): FunctionFragment;
    encodeFunctionData(functionFragment: 'DANGER__disableTokenGuardian', values?: undefined): string;
    encodeFunctionData(functionFragment: 'act', values: [Types.PublicationActionParamsStruct]): string;
    encodeFunctionData(functionFragment: 'actWithSig', values: [Types.PublicationActionParamsStruct, Types.EIP712SignatureStruct]): string;
    encodeFunctionData(functionFragment: 'approve', values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: 'balanceOf', values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: 'batchMigrateFollowModules', values: [PromiseOrValue<BigNumberish>[]]): string;
    encodeFunctionData(functionFragment: 'batchMigrateFollowers', values: [
        PromiseOrValue<BigNumberish>[],
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>[]
    ]): string;
    encodeFunctionData(functionFragment: 'batchMigrateFollows', values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>[],
        PromiseOrValue<BigNumberish>[]
    ]): string;
    encodeFunctionData(functionFragment: 'batchMigrateProfiles', values: [PromiseOrValue<BigNumberish>[]]): string;
    encodeFunctionData(functionFragment: 'burn', values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: 'changeDelegatedExecutorsConfig(uint256,address[],bool[],uint64,bool)', values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>[],
        PromiseOrValue<boolean>[],
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<boolean>
    ]): string;
    encodeFunctionData(functionFragment: 'changeDelegatedExecutorsConfig(uint256,address[],bool[])', values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>[], PromiseOrValue<boolean>[]]): string;
    encodeFunctionData(functionFragment: 'changeDelegatedExecutorsConfigWithSig', values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>[],
        PromiseOrValue<boolean>[],
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<boolean>,
        Types.EIP712SignatureStruct
    ]): string;
    encodeFunctionData(functionFragment: 'collect', values: [Types.CollectParamsStruct]): string;
    encodeFunctionData(functionFragment: 'collectWithSig', values: [Types.CollectParamsStruct, Types.EIP712SignatureStruct]): string;
    encodeFunctionData(functionFragment: 'comment', values: [Types.CommentParamsStruct]): string;
    encodeFunctionData(functionFragment: 'commentWithSig', values: [Types.CommentParamsStruct, Types.EIP712SignatureStruct]): string;
    encodeFunctionData(functionFragment: 'createProfile', values: [Types.CreateProfileParamsStruct]): string;
    encodeFunctionData(functionFragment: 'emitCollectNFTTransferEvent', values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: 'emitUnfollowedEvent', values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: 'enableTokenGuardian', values?: undefined): string;
    encodeFunctionData(functionFragment: 'exists', values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: 'follow', values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>[],
        PromiseOrValue<BigNumberish>[],
        PromiseOrValue<BytesLike>[]
    ]): string;
    encodeFunctionData(functionFragment: 'followWithSig', values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>[],
        PromiseOrValue<BigNumberish>[],
        PromiseOrValue<BytesLike>[],
        Types.EIP712SignatureStruct
    ]): string;
    encodeFunctionData(functionFragment: 'getActionModuleById', values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: 'getActionModuleWhitelistData', values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: 'getApproved', values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: 'getCollectNFTImpl', values?: undefined): string;
    encodeFunctionData(functionFragment: 'getContentURI', values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: 'getDelegatedExecutorsConfigNumber', values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: 'getDelegatedExecutorsMaxConfigNumberSet', values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: 'getDelegatedExecutorsPrevConfigNumber', values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: 'getDomainSeparator', values?: undefined): string;
    encodeFunctionData(functionFragment: 'getFollowNFTImpl', values?: undefined): string;
    encodeFunctionData(functionFragment: 'getGovernance', values?: undefined): string;
    encodeFunctionData(functionFragment: 'getProfile', values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: 'getProfileIdByHandleHash', values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: 'getPublication', values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: 'getPublicationType', values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: 'getState', values?: undefined): string;
    encodeFunctionData(functionFragment: 'getTokenGuardianDisablingTimestamp', values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: 'isApprovedForAll', values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: 'isBlocked', values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: 'isDelegatedExecutorApproved(uint256,address)', values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: 'isDelegatedExecutorApproved(uint256,address,uint64)', values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: 'isFollowModuleWhitelisted', values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: 'isFollowing', values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: 'isProfileCreatorWhitelisted', values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: 'isReferenceModuleWhitelisted', values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: 'mintTimestampOf', values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: 'mirror', values: [Types.MirrorParamsStruct]): string;
    encodeFunctionData(functionFragment: 'mirrorWithSig', values: [Types.MirrorParamsStruct, Types.EIP712SignatureStruct]): string;
    encodeFunctionData(functionFragment: 'name', values?: undefined): string;
    encodeFunctionData(functionFragment: 'nonces', values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: 'ownerOf', values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: 'post', values: [Types.PostParamsStruct]): string;
    encodeFunctionData(functionFragment: 'postWithSig', values: [Types.PostParamsStruct, Types.EIP712SignatureStruct]): string;
    encodeFunctionData(functionFragment: 'quote', values: [Types.QuoteParamsStruct]): string;
    encodeFunctionData(functionFragment: 'quoteWithSig', values: [Types.QuoteParamsStruct, Types.EIP712SignatureStruct]): string;
    encodeFunctionData(functionFragment: 'royaltyInfo', values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: 'safeTransferFrom(address,address,uint256)', values: [PromiseOrValue<string>, PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: 'safeTransferFrom(address,address,uint256,bytes)', values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: 'setApprovalForAll', values: [PromiseOrValue<string>, PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: 'setBlockStatus', values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>[],
        PromiseOrValue<boolean>[]
    ]): string;
    encodeFunctionData(functionFragment: 'setBlockStatusWithSig', values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>[],
        PromiseOrValue<boolean>[],
        Types.EIP712SignatureStruct
    ]): string;
    encodeFunctionData(functionFragment: 'setEmergencyAdmin', values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: 'setFollowModule', values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: 'setFollowModuleWithSig', values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>,
        Types.EIP712SignatureStruct
    ]): string;
    encodeFunctionData(functionFragment: 'setGovernance', values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: 'setMigrationAdmins', values: [PromiseOrValue<string>[], PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: 'setProfileMetadataURI', values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: 'setProfileMetadataURIWithSig', values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>, Types.EIP712SignatureStruct]): string;
    encodeFunctionData(functionFragment: 'setRoyalty', values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: 'setState', values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: 'supportsInterface', values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: 'symbol', values?: undefined): string;
    encodeFunctionData(functionFragment: 'tokenDataOf', values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: 'tokenURI', values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: 'totalSupply', values?: undefined): string;
    encodeFunctionData(functionFragment: 'transferFrom', values: [PromiseOrValue<string>, PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: 'unfollow', values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>[]]): string;
    encodeFunctionData(functionFragment: 'unfollowWithSig', values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>[],
        Types.EIP712SignatureStruct
    ]): string;
    encodeFunctionData(functionFragment: 'whitelistActionModule', values: [PromiseOrValue<string>, PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: 'whitelistFollowModule', values: [PromiseOrValue<string>, PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: 'whitelistProfileCreator', values: [PromiseOrValue<string>, PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: 'whitelistReferenceModule', values: [PromiseOrValue<string>, PromiseOrValue<boolean>]): string;
    decodeFunctionResult(functionFragment: 'DANGER__disableTokenGuardian', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'act', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'actWithSig', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'approve', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'balanceOf', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'batchMigrateFollowModules', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'batchMigrateFollowers', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'batchMigrateFollows', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'batchMigrateProfiles', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'burn', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'changeDelegatedExecutorsConfig(uint256,address[],bool[],uint64,bool)', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'changeDelegatedExecutorsConfig(uint256,address[],bool[])', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'changeDelegatedExecutorsConfigWithSig', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'collect', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'collectWithSig', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'comment', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'commentWithSig', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'createProfile', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'emitCollectNFTTransferEvent', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'emitUnfollowedEvent', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'enableTokenGuardian', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'exists', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'follow', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'followWithSig', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'getActionModuleById', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'getActionModuleWhitelistData', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'getApproved', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'getCollectNFTImpl', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'getContentURI', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'getDelegatedExecutorsConfigNumber', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'getDelegatedExecutorsMaxConfigNumberSet', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'getDelegatedExecutorsPrevConfigNumber', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'getDomainSeparator', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'getFollowNFTImpl', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'getGovernance', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'getProfile', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'getProfileIdByHandleHash', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'getPublication', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'getPublicationType', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'getState', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'getTokenGuardianDisablingTimestamp', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'isApprovedForAll', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'isBlocked', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'isDelegatedExecutorApproved(uint256,address)', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'isDelegatedExecutorApproved(uint256,address,uint64)', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'isFollowModuleWhitelisted', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'isFollowing', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'isProfileCreatorWhitelisted', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'isReferenceModuleWhitelisted', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'mintTimestampOf', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'mirror', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'mirrorWithSig', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'name', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'nonces', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'ownerOf', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'post', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'postWithSig', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'quote', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'quoteWithSig', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'royaltyInfo', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'safeTransferFrom(address,address,uint256)', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'safeTransferFrom(address,address,uint256,bytes)', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'setApprovalForAll', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'setBlockStatus', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'setBlockStatusWithSig', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'setEmergencyAdmin', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'setFollowModule', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'setFollowModuleWithSig', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'setGovernance', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'setMigrationAdmins', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'setProfileMetadataURI', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'setProfileMetadataURIWithSig', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'setRoyalty', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'setState', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'supportsInterface', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'symbol', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'tokenDataOf', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'tokenURI', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'totalSupply', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'transferFrom', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'unfollow', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'unfollowWithSig', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'whitelistActionModule', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'whitelistFollowModule', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'whitelistProfileCreator', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'whitelistReferenceModule', data: BytesLike): Result;
    events: {
        'Approval(address,address,uint256)': EventFragment;
        'ApprovalForAll(address,address,bool)': EventFragment;
        'Transfer(address,address,uint256)': EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: 'Approval'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'ApprovalForAll'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'Transfer'): EventFragment;
}
export interface ApprovalEventObject {
    owner: string;
    approved: string;
    tokenId: BigNumber;
}
export type ApprovalEvent = TypedEvent<[string, string, BigNumber], ApprovalEventObject>;
export type ApprovalEventFilter = TypedEventFilter<ApprovalEvent>;
export interface ApprovalForAllEventObject {
    owner: string;
    operator: string;
    approved: boolean;
}
export type ApprovalForAllEvent = TypedEvent<[string, string, boolean], ApprovalForAllEventObject>;
export type ApprovalForAllEventFilter = TypedEventFilter<ApprovalForAllEvent>;
export interface TransferEventObject {
    from: string;
    to: string;
    tokenId: BigNumber;
}
export type TransferEvent = TypedEvent<[string, string, BigNumber], TransferEventObject>;
export type TransferEventFilter = TypedEventFilter<TransferEvent>;
export interface DiGiHub extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: DiGiHubInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        DANGER__disableTokenGuardian(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        act(publicationActionParams: Types.PublicationActionParamsStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        actWithSig(publicationActionParams: Types.PublicationActionParamsStruct, signature: Types.EIP712SignatureStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        approve(to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        balanceOf(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        batchMigrateFollowModules(profileIds: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        batchMigrateFollowers(followerProfileIds: PromiseOrValue<BigNumberish>[], idOfProfileFollowed: PromiseOrValue<BigNumberish>, followTokenIds: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        batchMigrateFollows(followerProfileId: PromiseOrValue<BigNumberish>, idsOfProfileFollowed: PromiseOrValue<BigNumberish>[], followTokenIds: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        batchMigrateProfiles(profileIds: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        burn(tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        'changeDelegatedExecutorsConfig(uint256,address[],bool[],uint64,bool)'(delegatorProfileId: PromiseOrValue<BigNumberish>, delegatedExecutors: PromiseOrValue<string>[], approvals: PromiseOrValue<boolean>[], configNumber: PromiseOrValue<BigNumberish>, switchToGivenConfig: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        'changeDelegatedExecutorsConfig(uint256,address[],bool[])'(delegatorProfileId: PromiseOrValue<BigNumberish>, delegatedExecutors: PromiseOrValue<string>[], approvals: PromiseOrValue<boolean>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        changeDelegatedExecutorsConfigWithSig(delegatorProfileId: PromiseOrValue<BigNumberish>, delegatedExecutors: PromiseOrValue<string>[], approvals: PromiseOrValue<boolean>[], configNumber: PromiseOrValue<BigNumberish>, switchToGivenConfig: PromiseOrValue<boolean>, signature: Types.EIP712SignatureStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        collect(collectParams: Types.CollectParamsStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        collectWithSig(collectParams: Types.CollectParamsStruct, signature: Types.EIP712SignatureStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        comment(commentParams: Types.CommentParamsStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        commentWithSig(commentParams: Types.CommentParamsStruct, signature: Types.EIP712SignatureStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        createProfile(createProfileParams: Types.CreateProfileParamsStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        emitCollectNFTTransferEvent(profileId: PromiseOrValue<BigNumberish>, pubId: PromiseOrValue<BigNumberish>, collectNFTId: PromiseOrValue<BigNumberish>, from: PromiseOrValue<string>, to: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        emitUnfollowedEvent(unfollowerProfileId: PromiseOrValue<BigNumberish>, idOfProfileUnfollowed: PromiseOrValue<BigNumberish>, transactionExecutor: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        enableTokenGuardian(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        exists(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[boolean]>;
        follow(followerProfileId: PromiseOrValue<BigNumberish>, idsOfProfilesToFollow: PromiseOrValue<BigNumberish>[], followTokenIds: PromiseOrValue<BigNumberish>[], datas: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        followWithSig(followerProfileId: PromiseOrValue<BigNumberish>, idsOfProfilesToFollow: PromiseOrValue<BigNumberish>[], followTokenIds: PromiseOrValue<BigNumberish>[], datas: PromiseOrValue<BytesLike>[], signature: Types.EIP712SignatureStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getActionModuleById(id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        getActionModuleWhitelistData(actionModule: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[Types.ActionModuleWhitelistDataStructOutput]>;
        getApproved(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        getCollectNFTImpl(overrides?: CallOverrides): Promise<[string]>;
        getContentURI(profileId: PromiseOrValue<BigNumberish>, pubId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        getDelegatedExecutorsConfigNumber(delegatorProfileId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        getDelegatedExecutorsMaxConfigNumberSet(delegatorProfileId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        getDelegatedExecutorsPrevConfigNumber(delegatorProfileId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        getDomainSeparator(overrides?: CallOverrides): Promise<[string]>;
        getFollowNFTImpl(overrides?: CallOverrides): Promise<[string]>;
        getGovernance(overrides?: CallOverrides): Promise<[string]>;
        getProfile(profileId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[Types.ProfileStructOutput]>;
        getProfileIdByHandleHash(handleHash: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[BigNumber]>;
        getPublication(profileId: PromiseOrValue<BigNumberish>, pubId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[Types.PublicationStructOutput]>;
        getPublicationType(profileId: PromiseOrValue<BigNumberish>, pubId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[number]>;
        getState(overrides?: CallOverrides): Promise<[number]>;
        getTokenGuardianDisablingTimestamp(wallet: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        isApprovedForAll(owner: PromiseOrValue<string>, operator: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        isBlocked(profileId: PromiseOrValue<BigNumberish>, byProfileId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[boolean]>;
        'isDelegatedExecutorApproved(uint256,address)'(delegatorProfileId: PromiseOrValue<BigNumberish>, delegatedExecutor: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        'isDelegatedExecutorApproved(uint256,address,uint64)'(delegatorProfileId: PromiseOrValue<BigNumberish>, delegatedExecutor: PromiseOrValue<string>, configNumber: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[boolean]>;
        isFollowModuleWhitelisted(followModule: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        isFollowing(followerProfileId: PromiseOrValue<BigNumberish>, followedProfileId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[boolean]>;
        isProfileCreatorWhitelisted(profileCreator: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        isReferenceModuleWhitelisted(referenceModule: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        mintTimestampOf(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        mirror(mirrorParams: Types.MirrorParamsStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        mirrorWithSig(mirrorParams: Types.MirrorParamsStruct, signature: Types.EIP712SignatureStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        name(overrides?: CallOverrides): Promise<[string]>;
        nonces(signer: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        ownerOf(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        post(postParams: Types.PostParamsStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        postWithSig(postParams: Types.PostParamsStruct, signature: Types.EIP712SignatureStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        quote(quoteParams: Types.QuoteParamsStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        quoteWithSig(quoteParams: Types.QuoteParamsStruct, signature: Types.EIP712SignatureStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        royaltyInfo(tokenId: PromiseOrValue<BigNumberish>, salePrice: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string, BigNumber]>;
        'safeTransferFrom(address,address,uint256)'(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        'safeTransferFrom(address,address,uint256,bytes)'(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, _data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setApprovalForAll(operator: PromiseOrValue<string>, approved: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setBlockStatus(byProfileId: PromiseOrValue<BigNumberish>, idsOfProfilesToSetBlockStatus: PromiseOrValue<BigNumberish>[], blockStatus: PromiseOrValue<boolean>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setBlockStatusWithSig(byProfileId: PromiseOrValue<BigNumberish>, idsOfProfilesToSetBlockStatus: PromiseOrValue<BigNumberish>[], blockStatus: PromiseOrValue<boolean>[], signature: Types.EIP712SignatureStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setEmergencyAdmin(newEmergencyAdmin: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setFollowModule(profileId: PromiseOrValue<BigNumberish>, followModule: PromiseOrValue<string>, followModuleInitData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setFollowModuleWithSig(profileId: PromiseOrValue<BigNumberish>, followModule: PromiseOrValue<string>, followModuleInitData: PromiseOrValue<BytesLike>, signature: Types.EIP712SignatureStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setGovernance(newGovernance: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setMigrationAdmins(migrationAdmins: PromiseOrValue<string>[], whitelisted: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setProfileMetadataURI(profileId: PromiseOrValue<BigNumberish>, metadataURI: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setProfileMetadataURIWithSig(profileId: PromiseOrValue<BigNumberish>, metadataURI: PromiseOrValue<string>, signature: Types.EIP712SignatureStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setRoyalty(royaltiesInBasisPoints: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setState(newState: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[boolean]>;
        symbol(overrides?: CallOverrides): Promise<[string]>;
        tokenDataOf(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[Types.TokenDataStructOutput]>;
        tokenURI(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;
        transferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        unfollow(unfollowerProfileId: PromiseOrValue<BigNumberish>, idsOfProfilesToUnfollow: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        unfollowWithSig(unfollowerProfileId: PromiseOrValue<BigNumberish>, idsOfProfilesToUnfollow: PromiseOrValue<BigNumberish>[], signature: Types.EIP712SignatureStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        whitelistActionModule(actionModule: PromiseOrValue<string>, whitelist: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        whitelistFollowModule(followModule: PromiseOrValue<string>, whitelist: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        whitelistProfileCreator(profileCreator: PromiseOrValue<string>, whitelist: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        whitelistReferenceModule(referenceModule: PromiseOrValue<string>, whitelist: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    DANGER__disableTokenGuardian(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    act(publicationActionParams: Types.PublicationActionParamsStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    actWithSig(publicationActionParams: Types.PublicationActionParamsStruct, signature: Types.EIP712SignatureStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    approve(to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    balanceOf(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    batchMigrateFollowModules(profileIds: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    batchMigrateFollowers(followerProfileIds: PromiseOrValue<BigNumberish>[], idOfProfileFollowed: PromiseOrValue<BigNumberish>, followTokenIds: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    batchMigrateFollows(followerProfileId: PromiseOrValue<BigNumberish>, idsOfProfileFollowed: PromiseOrValue<BigNumberish>[], followTokenIds: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    batchMigrateProfiles(profileIds: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    burn(tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    'changeDelegatedExecutorsConfig(uint256,address[],bool[],uint64,bool)'(delegatorProfileId: PromiseOrValue<BigNumberish>, delegatedExecutors: PromiseOrValue<string>[], approvals: PromiseOrValue<boolean>[], configNumber: PromiseOrValue<BigNumberish>, switchToGivenConfig: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    'changeDelegatedExecutorsConfig(uint256,address[],bool[])'(delegatorProfileId: PromiseOrValue<BigNumberish>, delegatedExecutors: PromiseOrValue<string>[], approvals: PromiseOrValue<boolean>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    changeDelegatedExecutorsConfigWithSig(delegatorProfileId: PromiseOrValue<BigNumberish>, delegatedExecutors: PromiseOrValue<string>[], approvals: PromiseOrValue<boolean>[], configNumber: PromiseOrValue<BigNumberish>, switchToGivenConfig: PromiseOrValue<boolean>, signature: Types.EIP712SignatureStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    collect(collectParams: Types.CollectParamsStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    collectWithSig(collectParams: Types.CollectParamsStruct, signature: Types.EIP712SignatureStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    comment(commentParams: Types.CommentParamsStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    commentWithSig(commentParams: Types.CommentParamsStruct, signature: Types.EIP712SignatureStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    createProfile(createProfileParams: Types.CreateProfileParamsStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    emitCollectNFTTransferEvent(profileId: PromiseOrValue<BigNumberish>, pubId: PromiseOrValue<BigNumberish>, collectNFTId: PromiseOrValue<BigNumberish>, from: PromiseOrValue<string>, to: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    emitUnfollowedEvent(unfollowerProfileId: PromiseOrValue<BigNumberish>, idOfProfileUnfollowed: PromiseOrValue<BigNumberish>, transactionExecutor: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    enableTokenGuardian(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    exists(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
    follow(followerProfileId: PromiseOrValue<BigNumberish>, idsOfProfilesToFollow: PromiseOrValue<BigNumberish>[], followTokenIds: PromiseOrValue<BigNumberish>[], datas: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    followWithSig(followerProfileId: PromiseOrValue<BigNumberish>, idsOfProfilesToFollow: PromiseOrValue<BigNumberish>[], followTokenIds: PromiseOrValue<BigNumberish>[], datas: PromiseOrValue<BytesLike>[], signature: Types.EIP712SignatureStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getActionModuleById(id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    getActionModuleWhitelistData(actionModule: PromiseOrValue<string>, overrides?: CallOverrides): Promise<Types.ActionModuleWhitelistDataStructOutput>;
    getApproved(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    getCollectNFTImpl(overrides?: CallOverrides): Promise<string>;
    getContentURI(profileId: PromiseOrValue<BigNumberish>, pubId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    getDelegatedExecutorsConfigNumber(delegatorProfileId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    getDelegatedExecutorsMaxConfigNumberSet(delegatorProfileId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    getDelegatedExecutorsPrevConfigNumber(delegatorProfileId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    getDomainSeparator(overrides?: CallOverrides): Promise<string>;
    getFollowNFTImpl(overrides?: CallOverrides): Promise<string>;
    getGovernance(overrides?: CallOverrides): Promise<string>;
    getProfile(profileId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<Types.ProfileStructOutput>;
    getProfileIdByHandleHash(handleHash: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
    getPublication(profileId: PromiseOrValue<BigNumberish>, pubId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<Types.PublicationStructOutput>;
    getPublicationType(profileId: PromiseOrValue<BigNumberish>, pubId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<number>;
    getState(overrides?: CallOverrides): Promise<number>;
    getTokenGuardianDisablingTimestamp(wallet: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    isApprovedForAll(owner: PromiseOrValue<string>, operator: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    isBlocked(profileId: PromiseOrValue<BigNumberish>, byProfileId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
    'isDelegatedExecutorApproved(uint256,address)'(delegatorProfileId: PromiseOrValue<BigNumberish>, delegatedExecutor: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    'isDelegatedExecutorApproved(uint256,address,uint64)'(delegatorProfileId: PromiseOrValue<BigNumberish>, delegatedExecutor: PromiseOrValue<string>, configNumber: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
    isFollowModuleWhitelisted(followModule: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    isFollowing(followerProfileId: PromiseOrValue<BigNumberish>, followedProfileId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
    isProfileCreatorWhitelisted(profileCreator: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    isReferenceModuleWhitelisted(referenceModule: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    mintTimestampOf(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    mirror(mirrorParams: Types.MirrorParamsStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    mirrorWithSig(mirrorParams: Types.MirrorParamsStruct, signature: Types.EIP712SignatureStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    name(overrides?: CallOverrides): Promise<string>;
    nonces(signer: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    ownerOf(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    post(postParams: Types.PostParamsStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    postWithSig(postParams: Types.PostParamsStruct, signature: Types.EIP712SignatureStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    quote(quoteParams: Types.QuoteParamsStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    quoteWithSig(quoteParams: Types.QuoteParamsStruct, signature: Types.EIP712SignatureStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    royaltyInfo(tokenId: PromiseOrValue<BigNumberish>, salePrice: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string, BigNumber]>;
    'safeTransferFrom(address,address,uint256)'(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    'safeTransferFrom(address,address,uint256,bytes)'(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, _data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setApprovalForAll(operator: PromiseOrValue<string>, approved: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setBlockStatus(byProfileId: PromiseOrValue<BigNumberish>, idsOfProfilesToSetBlockStatus: PromiseOrValue<BigNumberish>[], blockStatus: PromiseOrValue<boolean>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setBlockStatusWithSig(byProfileId: PromiseOrValue<BigNumberish>, idsOfProfilesToSetBlockStatus: PromiseOrValue<BigNumberish>[], blockStatus: PromiseOrValue<boolean>[], signature: Types.EIP712SignatureStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setEmergencyAdmin(newEmergencyAdmin: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setFollowModule(profileId: PromiseOrValue<BigNumberish>, followModule: PromiseOrValue<string>, followModuleInitData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setFollowModuleWithSig(profileId: PromiseOrValue<BigNumberish>, followModule: PromiseOrValue<string>, followModuleInitData: PromiseOrValue<BytesLike>, signature: Types.EIP712SignatureStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setGovernance(newGovernance: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setMigrationAdmins(migrationAdmins: PromiseOrValue<string>[], whitelisted: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setProfileMetadataURI(profileId: PromiseOrValue<BigNumberish>, metadataURI: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setProfileMetadataURIWithSig(profileId: PromiseOrValue<BigNumberish>, metadataURI: PromiseOrValue<string>, signature: Types.EIP712SignatureStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setRoyalty(royaltiesInBasisPoints: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setState(newState: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
    symbol(overrides?: CallOverrides): Promise<string>;
    tokenDataOf(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<Types.TokenDataStructOutput>;
    tokenURI(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
    transferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    unfollow(unfollowerProfileId: PromiseOrValue<BigNumberish>, idsOfProfilesToUnfollow: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    unfollowWithSig(unfollowerProfileId: PromiseOrValue<BigNumberish>, idsOfProfilesToUnfollow: PromiseOrValue<BigNumberish>[], signature: Types.EIP712SignatureStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    whitelistActionModule(actionModule: PromiseOrValue<string>, whitelist: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    whitelistFollowModule(followModule: PromiseOrValue<string>, whitelist: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    whitelistProfileCreator(profileCreator: PromiseOrValue<string>, whitelist: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    whitelistReferenceModule(referenceModule: PromiseOrValue<string>, whitelist: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        DANGER__disableTokenGuardian(overrides?: CallOverrides): Promise<void>;
        act(publicationActionParams: Types.PublicationActionParamsStruct, overrides?: CallOverrides): Promise<string>;
        actWithSig(publicationActionParams: Types.PublicationActionParamsStruct, signature: Types.EIP712SignatureStruct, overrides?: CallOverrides): Promise<string>;
        approve(to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        balanceOf(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        batchMigrateFollowModules(profileIds: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<void>;
        batchMigrateFollowers(followerProfileIds: PromiseOrValue<BigNumberish>[], idOfProfileFollowed: PromiseOrValue<BigNumberish>, followTokenIds: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<void>;
        batchMigrateFollows(followerProfileId: PromiseOrValue<BigNumberish>, idsOfProfileFollowed: PromiseOrValue<BigNumberish>[], followTokenIds: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<void>;
        batchMigrateProfiles(profileIds: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<void>;
        burn(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        'changeDelegatedExecutorsConfig(uint256,address[],bool[],uint64,bool)'(delegatorProfileId: PromiseOrValue<BigNumberish>, delegatedExecutors: PromiseOrValue<string>[], approvals: PromiseOrValue<boolean>[], configNumber: PromiseOrValue<BigNumberish>, switchToGivenConfig: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        'changeDelegatedExecutorsConfig(uint256,address[],bool[])'(delegatorProfileId: PromiseOrValue<BigNumberish>, delegatedExecutors: PromiseOrValue<string>[], approvals: PromiseOrValue<boolean>[], overrides?: CallOverrides): Promise<void>;
        changeDelegatedExecutorsConfigWithSig(delegatorProfileId: PromiseOrValue<BigNumberish>, delegatedExecutors: PromiseOrValue<string>[], approvals: PromiseOrValue<boolean>[], configNumber: PromiseOrValue<BigNumberish>, switchToGivenConfig: PromiseOrValue<boolean>, signature: Types.EIP712SignatureStruct, overrides?: CallOverrides): Promise<void>;
        collect(collectParams: Types.CollectParamsStruct, overrides?: CallOverrides): Promise<BigNumber>;
        collectWithSig(collectParams: Types.CollectParamsStruct, signature: Types.EIP712SignatureStruct, overrides?: CallOverrides): Promise<BigNumber>;
        comment(commentParams: Types.CommentParamsStruct, overrides?: CallOverrides): Promise<BigNumber>;
        commentWithSig(commentParams: Types.CommentParamsStruct, signature: Types.EIP712SignatureStruct, overrides?: CallOverrides): Promise<BigNumber>;
        createProfile(createProfileParams: Types.CreateProfileParamsStruct, overrides?: CallOverrides): Promise<BigNumber>;
        emitCollectNFTTransferEvent(profileId: PromiseOrValue<BigNumberish>, pubId: PromiseOrValue<BigNumberish>, collectNFTId: PromiseOrValue<BigNumberish>, from: PromiseOrValue<string>, to: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        emitUnfollowedEvent(unfollowerProfileId: PromiseOrValue<BigNumberish>, idOfProfileUnfollowed: PromiseOrValue<BigNumberish>, transactionExecutor: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        enableTokenGuardian(overrides?: CallOverrides): Promise<void>;
        exists(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        follow(followerProfileId: PromiseOrValue<BigNumberish>, idsOfProfilesToFollow: PromiseOrValue<BigNumberish>[], followTokenIds: PromiseOrValue<BigNumberish>[], datas: PromiseOrValue<BytesLike>[], overrides?: CallOverrides): Promise<BigNumber[]>;
        followWithSig(followerProfileId: PromiseOrValue<BigNumberish>, idsOfProfilesToFollow: PromiseOrValue<BigNumberish>[], followTokenIds: PromiseOrValue<BigNumberish>[], datas: PromiseOrValue<BytesLike>[], signature: Types.EIP712SignatureStruct, overrides?: CallOverrides): Promise<BigNumber[]>;
        getActionModuleById(id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        getActionModuleWhitelistData(actionModule: PromiseOrValue<string>, overrides?: CallOverrides): Promise<Types.ActionModuleWhitelistDataStructOutput>;
        getApproved(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        getCollectNFTImpl(overrides?: CallOverrides): Promise<string>;
        getContentURI(profileId: PromiseOrValue<BigNumberish>, pubId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        getDelegatedExecutorsConfigNumber(delegatorProfileId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getDelegatedExecutorsMaxConfigNumberSet(delegatorProfileId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getDelegatedExecutorsPrevConfigNumber(delegatorProfileId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getDomainSeparator(overrides?: CallOverrides): Promise<string>;
        getFollowNFTImpl(overrides?: CallOverrides): Promise<string>;
        getGovernance(overrides?: CallOverrides): Promise<string>;
        getProfile(profileId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<Types.ProfileStructOutput>;
        getProfileIdByHandleHash(handleHash: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        getPublication(profileId: PromiseOrValue<BigNumberish>, pubId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<Types.PublicationStructOutput>;
        getPublicationType(profileId: PromiseOrValue<BigNumberish>, pubId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<number>;
        getState(overrides?: CallOverrides): Promise<number>;
        getTokenGuardianDisablingTimestamp(wallet: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        isApprovedForAll(owner: PromiseOrValue<string>, operator: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        isBlocked(profileId: PromiseOrValue<BigNumberish>, byProfileId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        'isDelegatedExecutorApproved(uint256,address)'(delegatorProfileId: PromiseOrValue<BigNumberish>, delegatedExecutor: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        'isDelegatedExecutorApproved(uint256,address,uint64)'(delegatorProfileId: PromiseOrValue<BigNumberish>, delegatedExecutor: PromiseOrValue<string>, configNumber: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        isFollowModuleWhitelisted(followModule: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        isFollowing(followerProfileId: PromiseOrValue<BigNumberish>, followedProfileId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        isProfileCreatorWhitelisted(profileCreator: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        isReferenceModuleWhitelisted(referenceModule: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        mintTimestampOf(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        mirror(mirrorParams: Types.MirrorParamsStruct, overrides?: CallOverrides): Promise<BigNumber>;
        mirrorWithSig(mirrorParams: Types.MirrorParamsStruct, signature: Types.EIP712SignatureStruct, overrides?: CallOverrides): Promise<BigNumber>;
        name(overrides?: CallOverrides): Promise<string>;
        nonces(signer: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        ownerOf(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        post(postParams: Types.PostParamsStruct, overrides?: CallOverrides): Promise<BigNumber>;
        postWithSig(postParams: Types.PostParamsStruct, signature: Types.EIP712SignatureStruct, overrides?: CallOverrides): Promise<BigNumber>;
        quote(quoteParams: Types.QuoteParamsStruct, overrides?: CallOverrides): Promise<BigNumber>;
        quoteWithSig(quoteParams: Types.QuoteParamsStruct, signature: Types.EIP712SignatureStruct, overrides?: CallOverrides): Promise<BigNumber>;
        royaltyInfo(tokenId: PromiseOrValue<BigNumberish>, salePrice: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string, BigNumber]>;
        'safeTransferFrom(address,address,uint256)'(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        'safeTransferFrom(address,address,uint256,bytes)'(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, _data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        setApprovalForAll(operator: PromiseOrValue<string>, approved: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        setBlockStatus(byProfileId: PromiseOrValue<BigNumberish>, idsOfProfilesToSetBlockStatus: PromiseOrValue<BigNumberish>[], blockStatus: PromiseOrValue<boolean>[], overrides?: CallOverrides): Promise<void>;
        setBlockStatusWithSig(byProfileId: PromiseOrValue<BigNumberish>, idsOfProfilesToSetBlockStatus: PromiseOrValue<BigNumberish>[], blockStatus: PromiseOrValue<boolean>[], signature: Types.EIP712SignatureStruct, overrides?: CallOverrides): Promise<void>;
        setEmergencyAdmin(newEmergencyAdmin: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setFollowModule(profileId: PromiseOrValue<BigNumberish>, followModule: PromiseOrValue<string>, followModuleInitData: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        setFollowModuleWithSig(profileId: PromiseOrValue<BigNumberish>, followModule: PromiseOrValue<string>, followModuleInitData: PromiseOrValue<BytesLike>, signature: Types.EIP712SignatureStruct, overrides?: CallOverrides): Promise<void>;
        setGovernance(newGovernance: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setMigrationAdmins(migrationAdmins: PromiseOrValue<string>[], whitelisted: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        setProfileMetadataURI(profileId: PromiseOrValue<BigNumberish>, metadataURI: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setProfileMetadataURIWithSig(profileId: PromiseOrValue<BigNumberish>, metadataURI: PromiseOrValue<string>, signature: Types.EIP712SignatureStruct, overrides?: CallOverrides): Promise<void>;
        setRoyalty(royaltiesInBasisPoints: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setState(newState: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
        symbol(overrides?: CallOverrides): Promise<string>;
        tokenDataOf(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<Types.TokenDataStructOutput>;
        tokenURI(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        transferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        unfollow(unfollowerProfileId: PromiseOrValue<BigNumberish>, idsOfProfilesToUnfollow: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<void>;
        unfollowWithSig(unfollowerProfileId: PromiseOrValue<BigNumberish>, idsOfProfilesToUnfollow: PromiseOrValue<BigNumberish>[], signature: Types.EIP712SignatureStruct, overrides?: CallOverrides): Promise<void>;
        whitelistActionModule(actionModule: PromiseOrValue<string>, whitelist: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        whitelistFollowModule(followModule: PromiseOrValue<string>, whitelist: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        whitelistProfileCreator(profileCreator: PromiseOrValue<string>, whitelist: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        whitelistReferenceModule(referenceModule: PromiseOrValue<string>, whitelist: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        'Approval(address,address,uint256)'(owner?: PromiseOrValue<string> | null, approved?: PromiseOrValue<string> | null, tokenId?: PromiseOrValue<BigNumberish> | null): ApprovalEventFilter;
        Approval(owner?: PromiseOrValue<string> | null, approved?: PromiseOrValue<string> | null, tokenId?: PromiseOrValue<BigNumberish> | null): ApprovalEventFilter;
        'ApprovalForAll(address,address,bool)'(owner?: PromiseOrValue<string> | null, operator?: PromiseOrValue<string> | null, approved?: null): ApprovalForAllEventFilter;
        ApprovalForAll(owner?: PromiseOrValue<string> | null, operator?: PromiseOrValue<string> | null, approved?: null): ApprovalForAllEventFilter;
        'Transfer(address,address,uint256)'(from?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, tokenId?: PromiseOrValue<BigNumberish> | null): TransferEventFilter;
        Transfer(from?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, tokenId?: PromiseOrValue<BigNumberish> | null): TransferEventFilter;
    };
    estimateGas: {
        DANGER__disableTokenGuardian(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        act(publicationActionParams: Types.PublicationActionParamsStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        actWithSig(publicationActionParams: Types.PublicationActionParamsStruct, signature: Types.EIP712SignatureStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        approve(to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        balanceOf(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        batchMigrateFollowModules(profileIds: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        batchMigrateFollowers(followerProfileIds: PromiseOrValue<BigNumberish>[], idOfProfileFollowed: PromiseOrValue<BigNumberish>, followTokenIds: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        batchMigrateFollows(followerProfileId: PromiseOrValue<BigNumberish>, idsOfProfileFollowed: PromiseOrValue<BigNumberish>[], followTokenIds: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        batchMigrateProfiles(profileIds: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        burn(tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        'changeDelegatedExecutorsConfig(uint256,address[],bool[],uint64,bool)'(delegatorProfileId: PromiseOrValue<BigNumberish>, delegatedExecutors: PromiseOrValue<string>[], approvals: PromiseOrValue<boolean>[], configNumber: PromiseOrValue<BigNumberish>, switchToGivenConfig: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        'changeDelegatedExecutorsConfig(uint256,address[],bool[])'(delegatorProfileId: PromiseOrValue<BigNumberish>, delegatedExecutors: PromiseOrValue<string>[], approvals: PromiseOrValue<boolean>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        changeDelegatedExecutorsConfigWithSig(delegatorProfileId: PromiseOrValue<BigNumberish>, delegatedExecutors: PromiseOrValue<string>[], approvals: PromiseOrValue<boolean>[], configNumber: PromiseOrValue<BigNumberish>, switchToGivenConfig: PromiseOrValue<boolean>, signature: Types.EIP712SignatureStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        collect(collectParams: Types.CollectParamsStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        collectWithSig(collectParams: Types.CollectParamsStruct, signature: Types.EIP712SignatureStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        comment(commentParams: Types.CommentParamsStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        commentWithSig(commentParams: Types.CommentParamsStruct, signature: Types.EIP712SignatureStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        createProfile(createProfileParams: Types.CreateProfileParamsStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        emitCollectNFTTransferEvent(profileId: PromiseOrValue<BigNumberish>, pubId: PromiseOrValue<BigNumberish>, collectNFTId: PromiseOrValue<BigNumberish>, from: PromiseOrValue<string>, to: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        emitUnfollowedEvent(unfollowerProfileId: PromiseOrValue<BigNumberish>, idOfProfileUnfollowed: PromiseOrValue<BigNumberish>, transactionExecutor: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        enableTokenGuardian(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        exists(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        follow(followerProfileId: PromiseOrValue<BigNumberish>, idsOfProfilesToFollow: PromiseOrValue<BigNumberish>[], followTokenIds: PromiseOrValue<BigNumberish>[], datas: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        followWithSig(followerProfileId: PromiseOrValue<BigNumberish>, idsOfProfilesToFollow: PromiseOrValue<BigNumberish>[], followTokenIds: PromiseOrValue<BigNumberish>[], datas: PromiseOrValue<BytesLike>[], signature: Types.EIP712SignatureStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getActionModuleById(id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getActionModuleWhitelistData(actionModule: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getApproved(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getCollectNFTImpl(overrides?: CallOverrides): Promise<BigNumber>;
        getContentURI(profileId: PromiseOrValue<BigNumberish>, pubId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getDelegatedExecutorsConfigNumber(delegatorProfileId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getDelegatedExecutorsMaxConfigNumberSet(delegatorProfileId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getDelegatedExecutorsPrevConfigNumber(delegatorProfileId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getDomainSeparator(overrides?: CallOverrides): Promise<BigNumber>;
        getFollowNFTImpl(overrides?: CallOverrides): Promise<BigNumber>;
        getGovernance(overrides?: CallOverrides): Promise<BigNumber>;
        getProfile(profileId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getProfileIdByHandleHash(handleHash: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        getPublication(profileId: PromiseOrValue<BigNumberish>, pubId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getPublicationType(profileId: PromiseOrValue<BigNumberish>, pubId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getState(overrides?: CallOverrides): Promise<BigNumber>;
        getTokenGuardianDisablingTimestamp(wallet: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        isApprovedForAll(owner: PromiseOrValue<string>, operator: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        isBlocked(profileId: PromiseOrValue<BigNumberish>, byProfileId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        'isDelegatedExecutorApproved(uint256,address)'(delegatorProfileId: PromiseOrValue<BigNumberish>, delegatedExecutor: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        'isDelegatedExecutorApproved(uint256,address,uint64)'(delegatorProfileId: PromiseOrValue<BigNumberish>, delegatedExecutor: PromiseOrValue<string>, configNumber: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        isFollowModuleWhitelisted(followModule: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        isFollowing(followerProfileId: PromiseOrValue<BigNumberish>, followedProfileId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        isProfileCreatorWhitelisted(profileCreator: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        isReferenceModuleWhitelisted(referenceModule: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        mintTimestampOf(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        mirror(mirrorParams: Types.MirrorParamsStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        mirrorWithSig(mirrorParams: Types.MirrorParamsStruct, signature: Types.EIP712SignatureStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        name(overrides?: CallOverrides): Promise<BigNumber>;
        nonces(signer: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        ownerOf(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        post(postParams: Types.PostParamsStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        postWithSig(postParams: Types.PostParamsStruct, signature: Types.EIP712SignatureStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        quote(quoteParams: Types.QuoteParamsStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        quoteWithSig(quoteParams: Types.QuoteParamsStruct, signature: Types.EIP712SignatureStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        royaltyInfo(tokenId: PromiseOrValue<BigNumberish>, salePrice: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        'safeTransferFrom(address,address,uint256)'(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        'safeTransferFrom(address,address,uint256,bytes)'(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, _data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setApprovalForAll(operator: PromiseOrValue<string>, approved: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setBlockStatus(byProfileId: PromiseOrValue<BigNumberish>, idsOfProfilesToSetBlockStatus: PromiseOrValue<BigNumberish>[], blockStatus: PromiseOrValue<boolean>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setBlockStatusWithSig(byProfileId: PromiseOrValue<BigNumberish>, idsOfProfilesToSetBlockStatus: PromiseOrValue<BigNumberish>[], blockStatus: PromiseOrValue<boolean>[], signature: Types.EIP712SignatureStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setEmergencyAdmin(newEmergencyAdmin: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setFollowModule(profileId: PromiseOrValue<BigNumberish>, followModule: PromiseOrValue<string>, followModuleInitData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setFollowModuleWithSig(profileId: PromiseOrValue<BigNumberish>, followModule: PromiseOrValue<string>, followModuleInitData: PromiseOrValue<BytesLike>, signature: Types.EIP712SignatureStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setGovernance(newGovernance: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setMigrationAdmins(migrationAdmins: PromiseOrValue<string>[], whitelisted: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setProfileMetadataURI(profileId: PromiseOrValue<BigNumberish>, metadataURI: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setProfileMetadataURIWithSig(profileId: PromiseOrValue<BigNumberish>, metadataURI: PromiseOrValue<string>, signature: Types.EIP712SignatureStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setRoyalty(royaltiesInBasisPoints: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setState(newState: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        symbol(overrides?: CallOverrides): Promise<BigNumber>;
        tokenDataOf(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        tokenURI(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        transferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        unfollow(unfollowerProfileId: PromiseOrValue<BigNumberish>, idsOfProfilesToUnfollow: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        unfollowWithSig(unfollowerProfileId: PromiseOrValue<BigNumberish>, idsOfProfilesToUnfollow: PromiseOrValue<BigNumberish>[], signature: Types.EIP712SignatureStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        whitelistActionModule(actionModule: PromiseOrValue<string>, whitelist: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        whitelistFollowModule(followModule: PromiseOrValue<string>, whitelist: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        whitelistProfileCreator(profileCreator: PromiseOrValue<string>, whitelist: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        whitelistReferenceModule(referenceModule: PromiseOrValue<string>, whitelist: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        DANGER__disableTokenGuardian(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        act(publicationActionParams: Types.PublicationActionParamsStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        actWithSig(publicationActionParams: Types.PublicationActionParamsStruct, signature: Types.EIP712SignatureStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        approve(to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        balanceOf(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        batchMigrateFollowModules(profileIds: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        batchMigrateFollowers(followerProfileIds: PromiseOrValue<BigNumberish>[], idOfProfileFollowed: PromiseOrValue<BigNumberish>, followTokenIds: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        batchMigrateFollows(followerProfileId: PromiseOrValue<BigNumberish>, idsOfProfileFollowed: PromiseOrValue<BigNumberish>[], followTokenIds: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        batchMigrateProfiles(profileIds: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        burn(tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        'changeDelegatedExecutorsConfig(uint256,address[],bool[],uint64,bool)'(delegatorProfileId: PromiseOrValue<BigNumberish>, delegatedExecutors: PromiseOrValue<string>[], approvals: PromiseOrValue<boolean>[], configNumber: PromiseOrValue<BigNumberish>, switchToGivenConfig: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        'changeDelegatedExecutorsConfig(uint256,address[],bool[])'(delegatorProfileId: PromiseOrValue<BigNumberish>, delegatedExecutors: PromiseOrValue<string>[], approvals: PromiseOrValue<boolean>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        changeDelegatedExecutorsConfigWithSig(delegatorProfileId: PromiseOrValue<BigNumberish>, delegatedExecutors: PromiseOrValue<string>[], approvals: PromiseOrValue<boolean>[], configNumber: PromiseOrValue<BigNumberish>, switchToGivenConfig: PromiseOrValue<boolean>, signature: Types.EIP712SignatureStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        collect(collectParams: Types.CollectParamsStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        collectWithSig(collectParams: Types.CollectParamsStruct, signature: Types.EIP712SignatureStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        comment(commentParams: Types.CommentParamsStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        commentWithSig(commentParams: Types.CommentParamsStruct, signature: Types.EIP712SignatureStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        createProfile(createProfileParams: Types.CreateProfileParamsStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        emitCollectNFTTransferEvent(profileId: PromiseOrValue<BigNumberish>, pubId: PromiseOrValue<BigNumberish>, collectNFTId: PromiseOrValue<BigNumberish>, from: PromiseOrValue<string>, to: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        emitUnfollowedEvent(unfollowerProfileId: PromiseOrValue<BigNumberish>, idOfProfileUnfollowed: PromiseOrValue<BigNumberish>, transactionExecutor: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        enableTokenGuardian(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        exists(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        follow(followerProfileId: PromiseOrValue<BigNumberish>, idsOfProfilesToFollow: PromiseOrValue<BigNumberish>[], followTokenIds: PromiseOrValue<BigNumberish>[], datas: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        followWithSig(followerProfileId: PromiseOrValue<BigNumberish>, idsOfProfilesToFollow: PromiseOrValue<BigNumberish>[], followTokenIds: PromiseOrValue<BigNumberish>[], datas: PromiseOrValue<BytesLike>[], signature: Types.EIP712SignatureStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getActionModuleById(id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getActionModuleWhitelistData(actionModule: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getApproved(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getCollectNFTImpl(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getContentURI(profileId: PromiseOrValue<BigNumberish>, pubId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getDelegatedExecutorsConfigNumber(delegatorProfileId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getDelegatedExecutorsMaxConfigNumberSet(delegatorProfileId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getDelegatedExecutorsPrevConfigNumber(delegatorProfileId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getDomainSeparator(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getFollowNFTImpl(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getGovernance(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getProfile(profileId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getProfileIdByHandleHash(handleHash: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPublication(profileId: PromiseOrValue<BigNumberish>, pubId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPublicationType(profileId: PromiseOrValue<BigNumberish>, pubId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getState(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getTokenGuardianDisablingTimestamp(wallet: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isApprovedForAll(owner: PromiseOrValue<string>, operator: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isBlocked(profileId: PromiseOrValue<BigNumberish>, byProfileId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        'isDelegatedExecutorApproved(uint256,address)'(delegatorProfileId: PromiseOrValue<BigNumberish>, delegatedExecutor: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        'isDelegatedExecutorApproved(uint256,address,uint64)'(delegatorProfileId: PromiseOrValue<BigNumberish>, delegatedExecutor: PromiseOrValue<string>, configNumber: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isFollowModuleWhitelisted(followModule: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isFollowing(followerProfileId: PromiseOrValue<BigNumberish>, followedProfileId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isProfileCreatorWhitelisted(profileCreator: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isReferenceModuleWhitelisted(referenceModule: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        mintTimestampOf(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        mirror(mirrorParams: Types.MirrorParamsStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        mirrorWithSig(mirrorParams: Types.MirrorParamsStruct, signature: Types.EIP712SignatureStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        name(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        nonces(signer: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        ownerOf(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        post(postParams: Types.PostParamsStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        postWithSig(postParams: Types.PostParamsStruct, signature: Types.EIP712SignatureStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        quote(quoteParams: Types.QuoteParamsStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        quoteWithSig(quoteParams: Types.QuoteParamsStruct, signature: Types.EIP712SignatureStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        royaltyInfo(tokenId: PromiseOrValue<BigNumberish>, salePrice: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        'safeTransferFrom(address,address,uint256)'(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        'safeTransferFrom(address,address,uint256,bytes)'(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, _data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setApprovalForAll(operator: PromiseOrValue<string>, approved: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setBlockStatus(byProfileId: PromiseOrValue<BigNumberish>, idsOfProfilesToSetBlockStatus: PromiseOrValue<BigNumberish>[], blockStatus: PromiseOrValue<boolean>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setBlockStatusWithSig(byProfileId: PromiseOrValue<BigNumberish>, idsOfProfilesToSetBlockStatus: PromiseOrValue<BigNumberish>[], blockStatus: PromiseOrValue<boolean>[], signature: Types.EIP712SignatureStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setEmergencyAdmin(newEmergencyAdmin: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setFollowModule(profileId: PromiseOrValue<BigNumberish>, followModule: PromiseOrValue<string>, followModuleInitData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setFollowModuleWithSig(profileId: PromiseOrValue<BigNumberish>, followModule: PromiseOrValue<string>, followModuleInitData: PromiseOrValue<BytesLike>, signature: Types.EIP712SignatureStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setGovernance(newGovernance: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setMigrationAdmins(migrationAdmins: PromiseOrValue<string>[], whitelisted: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setProfileMetadataURI(profileId: PromiseOrValue<BigNumberish>, metadataURI: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setProfileMetadataURIWithSig(profileId: PromiseOrValue<BigNumberish>, metadataURI: PromiseOrValue<string>, signature: Types.EIP712SignatureStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setRoyalty(royaltiesInBasisPoints: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setState(newState: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        tokenDataOf(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        tokenURI(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        unfollow(unfollowerProfileId: PromiseOrValue<BigNumberish>, idsOfProfilesToUnfollow: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        unfollowWithSig(unfollowerProfileId: PromiseOrValue<BigNumberish>, idsOfProfilesToUnfollow: PromiseOrValue<BigNumberish>[], signature: Types.EIP712SignatureStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        whitelistActionModule(actionModule: PromiseOrValue<string>, whitelist: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        whitelistFollowModule(followModule: PromiseOrValue<string>, whitelist: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        whitelistProfileCreator(profileCreator: PromiseOrValue<string>, whitelist: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        whitelistReferenceModule(referenceModule: PromiseOrValue<string>, whitelist: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
