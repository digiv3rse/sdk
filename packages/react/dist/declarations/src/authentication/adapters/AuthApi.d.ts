import { ChallengeRequest, SafeApolloClient, SignedAuthChallenge } from '@digiv3rse/api-bindings';
import { JwtCredentials } from "./JwtCredentials.js";
export type AuthChallenge = {
    id: string;
    text: string;
};
export declare class AuthApi {
    private apolloClient;
    constructor(apolloClient: SafeApolloClient);
    generateChallenge(request: ChallengeRequest): Promise<AuthChallenge>;
    generateCredentials(request: SignedAuthChallenge): Promise<JwtCredentials>;
    refreshCredentials(refreshToken: string): Promise<JwtCredentials>;
}
