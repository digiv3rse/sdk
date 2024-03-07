import { Credentials, ProfileId } from '@digiv3rse/domain/entities';
import { EvmAddress } from '@digiv3rse/shared-kernel';
export declare class JwtCredentials implements Credentials {
    readonly accessToken: string | null;
    readonly refreshToken: string;
    readonly address: EvmAddress;
    readonly profileId?: ProfileId;
    readonly authorizationId: string;
    constructor(accessToken: string | null, refreshToken: string);
    canRefresh(): boolean;
    private getTokenExpDate;
}
