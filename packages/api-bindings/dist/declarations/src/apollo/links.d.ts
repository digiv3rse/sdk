import { HttpLink } from '@apollo/client';
import { ILogger } from '@digiv3rse/shared-kernel';
import { SemVer } from '../SemVer';
import { IAccessTokenStorage } from './IAccessTokenStorage';
export declare function createAuthLink(accessTokenStorage: IAccessTokenStorage): import("@apollo/client").ApolloLink;
export type DiGiLinkArgs = {
    fetch?: WindowOrWorkerGlobalScope['fetch'];
    logger: ILogger;
    supportedVersion: SemVer;
    uri: string;
};
export declare function createDiGiLink({ fetch: preferredFetch, logger, supportedVersion, uri, }: DiGiLinkArgs): HttpLink;
export type SnapshotLinkArgs = {
    uri: string;
};
export declare function createSnapshotLink({ uri }: SnapshotLinkArgs): HttpLink;
