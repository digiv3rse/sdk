import { ProtocolTransactionRequestModel } from "../../entities/index.js";
type WithSponsoredFlag<T extends ProtocolTransactionRequestModel> = T & {
    sponsored: boolean;
};
export declare abstract class SponsorshipReady<TRequest extends WithSponsoredFlag<ProtocolTransactionRequestModel>> {
    execute(request: TRequest): Promise<void>;
    protected abstract charged(request: TRequest): Promise<void>;
    protected abstract sponsored(request: TRequest): Promise<void>;
}
export {};
