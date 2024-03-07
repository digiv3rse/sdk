import type { PromiseResult } from '@digiv3rse/shared-kernel';

import type { Authentication } from '../../../../authentication';
import { DiGiContext } from '../../../../context';
import type { CredentialsExpiredError, NotAuthenticatedError } from '../../../../errors';
import { FetchGraphQLClient } from '../../../../graphql/FetchGraphQLClient';
import {
  DiGiProfileManagerRelayErrorFragment,
  RelaySuccessFragment,
} from '../../../../graphql/fragments.generated';
import type { ActOnOpenActionRequest, TypedDataOptions } from '../../../../graphql/types.generated';
import { requireAuthHeaders, sdkAuthHeaderWrapper } from '../../../../helpers';
import {
  CreateActOnOpenActionBroadcastItemResultFragment,
  Sdk,
  getSdk,
} from './graphql/actions.generated';

/**
 * @group DiGiClient Modules
 */
export class Actions {
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
   * Act on open action.
   *
   * ⚠️ Requires authenticated DiGiClient.
   *
   * @param request - Request object for the mutation
   * @returns {@link PromiseResult} with {@link RelaySuccessFragment} or {@link DiGiProfileManagerRelayErrorFragment}
   *
   * @example
   * ```ts
   * const result = await client.publication.actions.actOn({
   *   actOn: {
   *     simpleCollectOpenAction: true,
   *   },
   *   for: '0x123-0x456',
   * });
   * ```
   */
  async actOn(
    request: ActOnOpenActionRequest,
  ): PromiseResult<
    RelaySuccessFragment | DiGiProfileManagerRelayErrorFragment,
    CredentialsExpiredError | NotAuthenticatedError
  > {
    return requireAuthHeaders(this.authentication, async (headers) => {
      const result = await this.sdk.ActOnOpenAction({ request }, headers);
      return result.data.result;
    });
  }

  /**
   * Fetch typed data to act on open action.
   *
   * Typed data has to be signed by the profile's wallet and broadcasted with {@link Transaction.broadcastOnchain}.
   *
   * ⚠️ Requires authenticated DiGiClient.
   *
   * @param request - Request object for the mutation
   * @param options - Configure returned typed data
   * @returns Typed data
   *
   * @example
   * ```ts
   * const result = await client.publication.actions.createActOnTypedData({
   *   actOn: {
   *     simpleCollectOpenAction: true,
   *   },
   *   for: '0x123-0x456',
   * });
   * ```
   */
  async createActOnTypedData(
    request: ActOnOpenActionRequest,
    options?: TypedDataOptions,
  ): PromiseResult<
    CreateActOnOpenActionBroadcastItemResultFragment,
    CredentialsExpiredError | NotAuthenticatedError
  > {
    return requireAuthHeaders(this.authentication, async (headers) => {
      const result = await this.sdk.CreateActOnOpenActionTypedData({ request, options }, headers);
      return result.data.result;
    });
  }
}
