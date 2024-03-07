import type { FunctionFragment, Result } from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, PayableOverrides, PopulatedTransaction, Signer, utils } from 'ethers';
import type { OnEvent, PromiseOrValue, TypedEvent, TypedEventFilter, TypedListener } from "./common.js";
export declare namespace Types {
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
}
export interface PermissionlessCreatorInterface extends utils.Interface {
    functions: {
        'createProfileWithHandle((address,address,bytes),string,address[])': FunctionFragment;
        'getProfileWithHandleCreationPrice()': FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: 'createProfileWithHandle' | 'getProfileWithHandleCreationPrice'): FunctionFragment;
    encodeFunctionData(functionFragment: 'createProfileWithHandle', values: [Types.CreateProfileParamsStruct, PromiseOrValue<string>, PromiseOrValue<string>[]]): string;
    encodeFunctionData(functionFragment: 'getProfileWithHandleCreationPrice', values?: undefined): string;
    decodeFunctionResult(functionFragment: 'createProfileWithHandle', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'getProfileWithHandleCreationPrice', data: BytesLike): Result;
    events: {};
}
export interface PermissionlessCreator extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: PermissionlessCreatorInterface;
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
        createProfileWithHandle(createProfileParams: Types.CreateProfileParamsStruct, handle: PromiseOrValue<string>, delegatedExecutors: PromiseOrValue<string>[], overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getProfileWithHandleCreationPrice(overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    createProfileWithHandle(createProfileParams: Types.CreateProfileParamsStruct, handle: PromiseOrValue<string>, delegatedExecutors: PromiseOrValue<string>[], overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getProfileWithHandleCreationPrice(overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        createProfileWithHandle(createProfileParams: Types.CreateProfileParamsStruct, handle: PromiseOrValue<string>, delegatedExecutors: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<[BigNumber, BigNumber] & {
            profileId: BigNumber;
            handleId: BigNumber;
        }>;
        getProfileWithHandleCreationPrice(overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        createProfileWithHandle(createProfileParams: Types.CreateProfileParamsStruct, handle: PromiseOrValue<string>, delegatedExecutors: PromiseOrValue<string>[], overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getProfileWithHandleCreationPrice(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        createProfileWithHandle(createProfileParams: Types.CreateProfileParamsStruct, handle: PromiseOrValue<string>, delegatedExecutors: PromiseOrValue<string>[], overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getProfileWithHandleCreationPrice(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
