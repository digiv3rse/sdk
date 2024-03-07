import { SafeApolloClient } from '@digiv3rse/api-bindings';
import { ICredentialsReader, ICredentialsWriter, IResettableCredentialsGateway, LogoutReason } from '@digiv3rse/domain/use-cases/authentication';
import { IStorage } from '@digiv3rse/storage';
import { JwtCredentials } from "./JwtCredentials.js";
export declare class CredentialsGateway implements ICredentialsWriter, ICredentialsReader, IResettableCredentialsGateway {
    private readonly credentialsStorage;
    private apolloClient;
    constructor(credentialsStorage: IStorage<JwtCredentials>, apolloClient: SafeApolloClient);
    getCredentials(): Promise<JwtCredentials | null>;
    save(credentials: JwtCredentials): Promise<void>;
    invalidate(reason: LogoutReason): Promise<void>;
    private revoke;
}
