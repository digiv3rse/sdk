import { ApolloCache, InMemoryCache, NormalizedCacheObject } from '@apollo/client';

import generatedIntrospection from '../../digi/graphql/generated';
import { createTypePolicies } from './createTypePolicies';

export function createDiGiCache(): ApolloCache<NormalizedCacheObject> {
  return new InMemoryCache({
    possibleTypes: generatedIntrospection.possibleTypes,
    typePolicies: createTypePolicies(),
  });
}
