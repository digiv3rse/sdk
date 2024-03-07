import { ProfileIdentifier, WalletData } from '@digiv3rse/domain/use-cases/lifecycle';
export declare enum SessionType {
    Anonymous = "ANONYMOUS",
    JustWallet = "JUST_WALLET",
    WithProfile = "WITH_PROFILE"
}
/**
 * @experimental
 */
declare class NotAuthenticatedSession<TWallet, TProfile> {
    readonly type = SessionType.Anonymous;
    isAuthenticated(): this is AuthenticatedWalletSession<TWallet, TProfile> | AuthenticatedProfileSession<TWallet, TProfile>;
    isNotAuthenticated(): this is NotAuthenticatedSession<TWallet, TProfile>;
}
/**
 * @experimental
 */
declare class AuthenticatedWalletSession<TWallet, TProfile> {
    readonly wallet: TWallet;
    readonly type = SessionType.JustWallet;
    constructor(wallet: TWallet);
    isAuthenticated(): this is AuthenticatedWalletSession<TWallet, TProfile> | AuthenticatedProfileSession<TWallet, TProfile>;
    isNotAuthenticated(): this is NotAuthenticatedSession<TWallet, TProfile>;
}
/**
 * @experimental
 */
declare class AuthenticatedProfileSession<TWallet, TProfile> {
    readonly wallet: TWallet;
    readonly profile: TProfile;
    readonly type = SessionType.WithProfile;
    constructor(wallet: TWallet, profile: TProfile);
    isAuthenticated(): this is AuthenticatedWalletSession<TWallet, TProfile> | AuthenticatedProfileSession<TWallet, TProfile>;
    isNotAuthenticated(): this is NotAuthenticatedSession<TWallet, TProfile>;
}
export type { NotAuthenticatedSession, AuthenticatedWalletSession, AuthenticatedProfileSession };
export declare function notAuthenticated(): NotAuthenticatedSession<never, never>;
export declare function authenticatedWallet<T extends WalletData>(wallet: T): AuthenticatedWalletSession<T, never>;
export declare function authenticatedProfile<TWallet extends WalletData, TProfile extends ProfileIdentifier>(wallet: TWallet, profile: TProfile): AuthenticatedProfileSession<TWallet, TProfile>;
export declare function authenticatedWith<TWallet extends WalletData, TProfile extends ProfileIdentifier>(wallet: TWallet, profile: TProfile | null): AuthenticatedWalletSession<TWallet, never> | AuthenticatedProfileSession<TWallet, TProfile>;
/**
 * @experimental
 */
export type Session<TWallet extends WalletData, TProfile extends ProfileIdentifier> = NotAuthenticatedSession<never, never> | AuthenticatedWalletSession<TWallet, never> | AuthenticatedProfileSession<TWallet, TProfile>;
export declare function getSession(): Session<WalletData, ProfileIdentifier> | null;
export declare function useSessionVar(): Session<WalletData, ProfileIdentifier> | null;
export declare function resetSession(): void;
export declare function updateSession(session: Session<WalletData, ProfileIdentifier>): void;
