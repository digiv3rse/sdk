import { ApolloClient, gql, InMemoryCache } from '@apollo/client';
import { ILogger } from '@digiv3rse/shared-kernel';
import { mock } from 'jest-mock-extended';

import { semVer } from '../../../SemVer';
import { createHttpJsonResponse } from '../../__helpers__/mocks';
import { createDiGiLink } from '../DiGiLink';

const query = gql`
  query Ping {
    ping
  }
`;

describe(`Given an instance of the ${ApolloClient.name}`, () => {
  describe('wired with DiGiLink', () => {
    const supportedVersion = semVer('2.0.0');

    describe(`when the response 'x-api-version' is ahead by a major version or more compared to the SDK supported range`, () => {
      it(`should use the ILogger to log a warning that the DiGi API version is likely not supported by the current DiGi SDK client`, async () => {
        const logger = mock<ILogger>();
        const response = createHttpJsonResponse(
          200,
          {
            data: { ping: null },
          },
          { 'x-api-version': semVer('3.0.0') },
        );
        const client = new ApolloClient({
          cache: new InMemoryCache(),
          link: createDiGiLink({
            fetch: jest.fn().mockResolvedValue(response),
            logger,
            uri: 'http://localhost:4000/graphql',
            supportedVersion,
          }),
        });

        await client.query({ query });

        expect(logger.warn).toHaveBeenCalled();
      });
    });

    describe(`when the response 'x-api-version' is older than the SDK supported range`, () => {
      it(`should use the ILogger to log an that there is a significant incompatibility between the DiGi SDK client used and the DiGi API version`, async () => {
        const logger = mock<ILogger>();
        const response = createHttpJsonResponse(
          200,
          {
            data: { ping: null },
          },
          { 'x-api-version': semVer('1.0.0') },
        );
        const client = new ApolloClient({
          cache: new InMemoryCache(),
          link: createDiGiLink({
            fetch: jest.fn().mockResolvedValue(response),
            logger,
            uri: 'http://localhost:4000/graphql',
            supportedVersion,
          }),
        });

        await client.query({ query });

        expect(logger.warn).toHaveBeenCalled();
      });
    });

    describe(`when the response 'x-api-version' is ahead ONLY by minor versions compared to the SDK supported range`, () => {
      it(`should use the ILogger to log an that there is a significant incompatibility between the DiGi SDK client used and the DiGi API version`, async () => {
        const logger = mock<ILogger>();
        const response = createHttpJsonResponse(
          200,
          {
            data: { ping: null },
          },
          { 'x-api-version': semVer('2.1.0') },
        );
        const client = new ApolloClient({
          cache: new InMemoryCache(),
          link: createDiGiLink({
            fetch: jest.fn().mockResolvedValue(response),
            logger,
            uri: 'http://localhost:4000/graphql',
            supportedVersion,
          }),
        });

        await client.query({ query });

        expect(logger.info).toHaveBeenCalled();
      });
    });
  });
});
