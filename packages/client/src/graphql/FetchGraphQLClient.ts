import { GraphQLClient } from 'graphql-request';

import { DiGiContext } from '../context';

type ClientOptions = ConstructorParameters<typeof GraphQLClient>[1];
type Options = Omit<ClientOptions, 'fetch'>;

export class FetchGraphQLClient extends GraphQLClient {
  constructor(context: DiGiContext, options?: Options) {
    const url = context.environment.gqlEndpoint;
    const headers = {
      ...(context.headers || {}),
    };
    super(url, {
      ...options,
      fetch: fetch,
      headers,
    });
  }
}
