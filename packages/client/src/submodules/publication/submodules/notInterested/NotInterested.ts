import type { PromiseResult } from '@digiv3rse/shared-kernel';

import type { Authentication } from '../../../../authentication';
import { DiGiContext } from '../../../../context';
import type { CredentialsExpiredError, NotAuthenticatedError } from '../../../../errors';
import { FetchGraphQLClient } from '../../../../graphql/FetchGraphQLClient';
import type { PublicationNotInterestedRequest } from '../../../../graphql/types.generated';
import { requireAuthHeaders, sdkAuthHeaderWrapper } from '../../../../helpers';
import { Sdk, getSdk } from './graphql/notInterested.generated';

/**
 * @group DiGiClient Modules
 */
export class NotInterested {
  private readonly sdk: Sdk;

  /**
   * @internal
   */
  constructor(
    context: DiGiContext,
    private readonly authentication: Authentication,
  ) {
    const client = new FetchGraphQLClient(context);
    this.sdk = getSdk(client, sdkAuthHeaderWrapper(authentication));
  }

  /**
   * Mark a publication as "not interested".
   *
   * ⚠️ Requires authenticated DiGiClient.
   *
   * @param request - Request object for the mutation
   * @returns {@link PromiseResult} with void
   *
   * @example
   * ```ts
   * await client.publication.notInterested.add({
   *   on: '0x02-0x01',
   * });
   * ```
   */
  async add(
    request: PublicationNotInterestedRequest,
  ): PromiseResult<void, CredentialsExpiredError | NotAuthenticatedError> {
    return requireAuthHeaders(this.authentication, async (headers) => {
      await this.sdk.AddPublicationNotInterested({ request }, headers);
    });
  }

  /**
   * Undo marking a publication as "not interested".
   *
   * ⚠️ Requires authenticated DiGiClient.
   *
   * @param request - Request object for the mutation
   * @returns {@link PromiseResult} with void
   *
   * @example
   * ```ts
   * await client.publication.notInterested.undo({
   *   on: '0x02-0x01',
   * });
   * ```
   */
  async undo(
    request: PublicationNotInterestedRequest,
  ): PromiseResult<void, CredentialsExpiredError | NotAuthenticatedError> {
    return requireAuthHeaders(this.authentication, async (headers) => {
      await this.sdk.UndoPublicationNotInterested({ request }, headers);
    });
  }
}
