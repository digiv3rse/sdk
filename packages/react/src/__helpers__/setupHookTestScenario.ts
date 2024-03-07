import { MockedResponse } from '@apollo/client/testing';
import { mockDiGiApolloClient } from '@digiv3rse/api-bindings/mocks';
import { IStorageProvider } from '@digiv3rse/storage';
import { RenderHookResult } from '@testing-library/react';
import { mock } from 'jest-mock-extended';

import { IBindings, resolveConfig } from '../config';
import { development } from '../environments';
import { ProfileCacheManager } from '../profile/infrastructure/ProfileCacheManager';
import { PublicationCacheManager } from '../publication/infrastructure/PublicationCacheManager';
import { renderHookWithMocks } from './testing-library';

export function setupHookTestScenario(mocks: MockedResponse[]) {
  const client = mockDiGiApolloClient(mocks);

  return {
    renderHook: <TProps, TResult>(
      callback: (props: TProps) => TResult,
    ): RenderHookResult<TResult, TProps> => {
      const config = resolveConfig({
        bindings: mock<IBindings>(),
        environment: development,
        storage: mock<IStorageProvider>(),
      });
      return renderHookWithMocks(callback, {
        mocks: {
          config,
          apolloClient: client,
          publicationCacheManager: new PublicationCacheManager(client, config.fragmentVariables),
          profileCacheManager: new ProfileCacheManager(client, config.fragmentVariables),
        },
      });
    },
  };
}
