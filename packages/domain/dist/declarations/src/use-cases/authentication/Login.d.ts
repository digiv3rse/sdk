import { EvmAddress, PromiseResult, Result } from '@digiv3rse/shared-kernel';
import { Credentials, PendingSigningRequestError, ProfileId, UserRejectedError, Wallet, WalletConnectionError } from "../../entities/index.js";
import { IWalletGateway } from "../wallets/IWalletGateway.js";
import { ICredentialsWriter } from "./ICredentialsWriter.js";
import { SessionData } from "./SessionData.js";
/**
 * The details required to authenticate the session.
 */
export type LoginRequest = {
    /**
     * The user's wallet. Could be an EOA or EIP-1271 compliant Smart Wallet (e.g. ERC-6551).
     *
     * If a Profile ID is also provide the address MUST be the Profile Owner or a Profile Manager for it.
     */
    address: EvmAddress;
    /**
     * The Profile ID to login with.
     *
     * If not provided the authenticated session will be of {@link SessionType.JustWallet} type.
     * This has a limited set of features available. Namely, it can be used to claim a Profile handle (if eligible)
     * and execute Open Actions on publications (e.g Collect Open Action).
     */
    profileId?: ProfileId;
};
export type LoginError = PendingSigningRequestError | UserRejectedError | WalletConnectionError;
export interface ILoginPresenter {
    present(result: Result<SessionData, LoginError>): void;
}
export interface ICredentialsIssuer {
    issueCredentials(signer: Wallet, using?: ProfileId): PromiseResult<Credentials, LoginError>;
}
export declare class Login {
    private readonly walletGateway;
    private readonly credentialsIssuer;
    private readonly credentialsWriter;
    private readonly presenter;
    constructor(walletGateway: IWalletGateway, credentialsIssuer: ICredentialsIssuer, credentialsWriter: ICredentialsWriter, presenter: ILoginPresenter);
    execute(request: LoginRequest): Promise<void>;
}
