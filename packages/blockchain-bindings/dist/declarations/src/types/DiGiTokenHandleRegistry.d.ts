import type { FunctionFragment, Result } from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from 'ethers';
import type { OnEvent, PromiseOrValue, TypedEvent, TypedEventFilter, TypedListener } from "./common.js";
export declare namespace Types {
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
}
export interface DiGiTokenHandleRegistryInterface extends utils.Interface {
    functions: {
        'getDefaultHandle(uint256)': FunctionFragment;
        'link(uint256,uint256)': FunctionFragment;
        'linkWithSig(uint256,uint256,(address,uint8,bytes32,bytes32,uint256))': FunctionFragment;
        'migrationLink(uint256,uint256)': FunctionFragment;
        'nonces(address)': FunctionFragment;
        'resolve(uint256)': FunctionFragment;
        'unlink(uint256,uint256)': FunctionFragment;
        'unlinkWithSig(uint256,uint256,(address,uint8,bytes32,bytes32,uint256))': FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: 'getDefaultHandle' | 'link' | 'linkWithSig' | 'migrationLink' | 'nonces' | 'resolve' | 'unlink' | 'unlinkWithSig'): FunctionFragment;
    encodeFunctionData(functionFragment: 'getDefaultHandle', values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: 'link', values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: 'linkWithSig', values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        Types.EIP712SignatureStruct
    ]): string;
    encodeFunctionData(functionFragment: 'migrationLink', values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: 'nonces', values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: 'resolve', values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: 'unlink', values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: 'unlinkWithSig', values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        Types.EIP712SignatureStruct
    ]): string;
    decodeFunctionResult(functionFragment: 'getDefaultHandle', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'link', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'linkWithSig', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'migrationLink', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'nonces', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'resolve', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'unlink', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'unlinkWithSig', data: BytesLike): Result;
    events: {};
}
export interface DiGiTokenHandleRegistry extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: DiGiTokenHandleRegistryInterface;
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
        getDefaultHandle(profileId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        link(handleId: PromiseOrValue<BigNumberish>, profileId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        linkWithSig(handleId: PromiseOrValue<BigNumberish>, profileId: PromiseOrValue<BigNumberish>, signature: Types.EIP712SignatureStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        migrationLink(handleId: PromiseOrValue<BigNumberish>, profileId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        nonces(signer: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber] & {
            nonce: BigNumber;
        }>;
        resolve(handleId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        unlink(handleId: PromiseOrValue<BigNumberish>, profileId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        unlinkWithSig(handleId: PromiseOrValue<BigNumberish>, profileId: PromiseOrValue<BigNumberish>, signature: Types.EIP712SignatureStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    getDefaultHandle(profileId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    link(handleId: PromiseOrValue<BigNumberish>, profileId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    linkWithSig(handleId: PromiseOrValue<BigNumberish>, profileId: PromiseOrValue<BigNumberish>, signature: Types.EIP712SignatureStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    migrationLink(handleId: PromiseOrValue<BigNumberish>, profileId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    nonces(signer: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    resolve(handleId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    unlink(handleId: PromiseOrValue<BigNumberish>, profileId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    unlinkWithSig(handleId: PromiseOrValue<BigNumberish>, profileId: PromiseOrValue<BigNumberish>, signature: Types.EIP712SignatureStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        getDefaultHandle(profileId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        link(handleId: PromiseOrValue<BigNumberish>, profileId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        linkWithSig(handleId: PromiseOrValue<BigNumberish>, profileId: PromiseOrValue<BigNumberish>, signature: Types.EIP712SignatureStruct, overrides?: CallOverrides): Promise<void>;
        migrationLink(handleId: PromiseOrValue<BigNumberish>, profileId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        nonces(signer: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        resolve(handleId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        unlink(handleId: PromiseOrValue<BigNumberish>, profileId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        unlinkWithSig(handleId: PromiseOrValue<BigNumberish>, profileId: PromiseOrValue<BigNumberish>, signature: Types.EIP712SignatureStruct, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        getDefaultHandle(profileId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        link(handleId: PromiseOrValue<BigNumberish>, profileId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        linkWithSig(handleId: PromiseOrValue<BigNumberish>, profileId: PromiseOrValue<BigNumberish>, signature: Types.EIP712SignatureStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        migrationLink(handleId: PromiseOrValue<BigNumberish>, profileId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        nonces(signer: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        resolve(handleId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        unlink(handleId: PromiseOrValue<BigNumberish>, profileId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        unlinkWithSig(handleId: PromiseOrValue<BigNumberish>, profileId: PromiseOrValue<BigNumberish>, signature: Types.EIP712SignatureStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        getDefaultHandle(profileId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        link(handleId: PromiseOrValue<BigNumberish>, profileId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        linkWithSig(handleId: PromiseOrValue<BigNumberish>, profileId: PromiseOrValue<BigNumberish>, signature: Types.EIP712SignatureStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        migrationLink(handleId: PromiseOrValue<BigNumberish>, profileId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        nonces(signer: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        resolve(handleId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        unlink(handleId: PromiseOrValue<BigNumberish>, profileId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        unlinkWithSig(handleId: PromiseOrValue<BigNumberish>, profileId: PromiseOrValue<BigNumberish>, signature: Types.EIP712SignatureStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
