import { from } from '@apollo/client';
import { ILogger } from '@digiv3rse/shared-kernel';

import { DIGI_API_MINIMAL_SUPPORTED_VERSION } from '../constants';
import { SafeApolloClient } from './SafeApolloClient';
import { createDiGiCache } from './cache/createDiGiCache';
import { AuthLinkArgs, IAccessTokenStorage, createAuthLink, createDiGiLink } from './links';

export type ApolloClientConfig = AuthLinkArgs & {
  uri: string;
  logger: ILogger;
  pollingInterval: number;
  connectToDevTools?: boolean;
};

export function createDiGiApolloClient({
  accessTokenStorage,
  origin,
  uri,
  logger,
  pollingInterval,
  connectToDevTools,
}: ApolloClientConfig) {
  const authLink = createAuthLink({ accessTokenStorage, origin });

  const httpLink = createDiGiLink({
    uri,
    logger,
    supportedVersion: DIGI_API_MINIMAL_SUPPORTED_VERSION,
  });

  return new SafeApolloClient({
    connectToDevTools,
    cache: createDiGiCache(),
    link: from([authLink, httpLink]),
    pollingInterval,
    version: DIGI_API_MINIMAL_SUPPORTED_VERSION,
  });
}

export type AuthApolloClientConfig = {
  uri: string;
  logger: ILogger;
};

export function createAuthApolloClient({ uri, logger }: AuthApolloClientConfig) {
  return new SafeApolloClient({
    cache: createDiGiCache(),
    link: createDiGiLink({ uri, logger, supportedVersion: DIGI_API_MINIMAL_SUPPORTED_VERSION }),
    version: DIGI_API_MINIMAL_SUPPORTED_VERSION,
  });
}

export type { IGraphQLClient } from './IGraphQLClient';
export * from './cache/session';
export * from './cache/transactions';
export * from './errors';
export type { IAccessTokenStorage, SafeApolloClient };
