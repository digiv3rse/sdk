import { Result } from '@digiv3rse/shared-kernel';
import { PendingSigningRequestError, Signature, UserRejectedError, WalletConnectionError } from "../../entities/index.js";
import { ActiveWallet } from "../authentication/index.js";
type SignMessageResult = Result<Signature, PendingSigningRequestError | UserRejectedError | WalletConnectionError>;
interface ISignArbitraryMessagePresenter {
    present(result: SignMessageResult): void;
}
export declare class SignArbitraryMessage {
    private readonly activeWallet;
    private readonly presenter;
    constructor(activeWallet: ActiveWallet, presenter: ISignArbitraryMessagePresenter);
    execute(request: string): Promise<void>;
}
export {};
