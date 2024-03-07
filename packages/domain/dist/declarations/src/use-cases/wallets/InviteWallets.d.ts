import { EvmAddress } from '@digiv3rse/shared-kernel';
import { Invite } from "../../entities/index.js";
import { IGenericResultPresenter } from "../transactions/index.js";
export type InviteWalletsRequest = {
    wallets: EvmAddress[];
};
export declare class WalletAlreadyInvitedError extends Error {
    readonly invalid: EvmAddress[];
    name: "WalletAlreadyInvitedError";
    constructor(invalid: EvmAddress[]);
}
export interface IInviteWalletsFactory {
    create(data: InviteWalletsRequest): Promise<Invite[]>;
}
export interface IInviteWalletsGateway {
    invite(data: Invite[]): Promise<void>;
}
export type IInviteWalletsPresenter = IGenericResultPresenter<void, WalletAlreadyInvitedError>;
export declare class InviteWallets {
    private readonly factory;
    private readonly gateway;
    private readonly presenter;
    constructor(factory: IInviteWalletsFactory, gateway: IInviteWalletsGateway, presenter: IInviteWalletsPresenter);
    invite(request: InviteWalletsRequest): Promise<void>;
}
