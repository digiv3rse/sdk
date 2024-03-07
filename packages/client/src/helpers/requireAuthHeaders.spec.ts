import { InMemoryStorageProvider } from '@digiv3rse/storage';

import { buildTestEnvironment } from '../__helpers__';
import { Authentication } from '../authentication';
import { DiGiContext } from '../context';
import { NotAuthenticatedError } from '../errors';
import { requireAuthHeaders } from './requireAuthHeaders';

const context: DiGiContext = {
  environment: buildTestEnvironment(),
  storage: new InMemoryStorageProvider(),
  params: {},
};

describe(`Given the "${requireAuthHeaders.name}" helper`, () => {
  describe(`when the ${Authentication.name} is available but not authenticated`, () => {
    it(`should return failure with ${NotAuthenticatedError.name}`, async () => {
      const authentication = new Authentication(context);
      const result = await requireAuthHeaders(authentication, (header) => {
        return Promise.resolve(header);
      });

      expect(result.isFailure()).toBeTruthy();
      expect(() => result.unwrap()).toThrow(NotAuthenticatedError);
    });
  });
});
