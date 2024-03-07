import { UnspecifiedError, Profile } from '@digiv3rse/api-bindings';
import { LogoutReason, SessionType } from '@digiv3rse/domain/use-cases/authentication';
import { EvmAddress } from '@digiv3rse/shared-kernel';
import { ReadResult } from "../helpers/reads.js";
export { LogoutReason, SessionType };
/**
 * A not authenticated user's session
 */
export type AnonymousSession = {
    /**
     * The union discriminant.
     */
    type: SessionType.Anonymous;
    /**
     * Whether the user is authenticated or not.
     */
    authenticated: false;
    /**
     * The reason the previous session ended.
     */
    lastLogoutReason?: LogoutReason;
};
/**
 * A typical authenticated user's session.
 */
export type ProfileSession = {
    /**
     * The union discriminant.
     */
    type: SessionType.WithProfile;
    /**
     * Whether the user is authenticated or not.
     */
    authenticated: true;
    /**
     * The Profile Owner or an authorized Profile Manager.
     */
    address: EvmAddress;
    /**
     * The authenticated Profile.
     */
    profile: Profile;
};
/**
 * An authenticated user's session with just a wallet address.
 *
 * This is currently not used, but will be used in the future.
 */
export type WalletOnlySession = {
    /**
     * The union discriminant.
     */
    type: SessionType.JustWallet;
    /**
     * Whether the user is authenticated or not.
     */
    authenticated: true;
    /**
     * The Profile Owner or an authorized Profile Manager.
     */
    address: EvmAddress;
};
/**
 * Describes the details of a user's session.
 */
export type Session = AnonymousSession | ProfileSession | WalletOnlySession;
/**
 * `useSession` is a hook that lets you access the current {@link Session}
 *
 * @example
 * Use this hook to determine if the user is authenticated or not.
 * ```tsx
 * function Page() {
 *   const { data, error, loading } = useSession();
 *
 *   if (loading) return <p>Loading...</p>;
 *
 *   if (error) return <p>Something went wrong.</p>;
 *
 *   switch (data.type) {
 *     case SessionType.Anonymous:
 *       // data is a AnonymousSession
 *       return <Login />;
 *
 *     case SessionType.JustWallet:
 *       // data is a WalletOnlySession
 *       return <MyWallet address={data.address} />;
 *
 *     case SessionType.WithProfile:
 *       // data is a ProfileSession
 *       return <MyProfile profile={data.profile} />;
 *
 *     default:
 *       return <p>Something went wrong.</p>;
 *   }
 * }
 * ```
 *
 * @category Authentication
 * @group Hooks
 */
export declare function useSession(): ReadResult<Session, UnspecifiedError>;
