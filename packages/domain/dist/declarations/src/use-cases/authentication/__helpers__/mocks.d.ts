import { Wallet } from "../../../entities/index.js";
import { ActiveWallet } from "../ActiveWallet.js";
import { LoginRequest } from "../Login.js";
export declare function mockProfileLoginRequest(overrides?: Partial<LoginRequest>): LoginRequest;
export declare function mockJustWalletLoginRequest(overrides?: Partial<LoginRequest>): LoginRequest;
export declare function mockActiveWallet({ wallet }?: {
    wallet?: Wallet;
}): import("jest-mock-extended/lib/Mock")._MockProxy<ActiveWallet> & ActiveWallet;
