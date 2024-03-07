import type { PromiseResult } from '@digiv3rse/shared-kernel';
import type { Authentication } from "../../authentication/index.js";
import { DiGiContext } from "../../context.js";
import type { CredentialsExpiredError, NotAuthenticatedError } from "../../errors.js";
import type { NotificationRequest } from "../../graphql/types.generated.js";
import { PaginatedResult } from "../../helpers/index.js";
import { ActedNotificationFragment, CommentNotificationFragment, FollowNotificationFragment, MentionNotificationFragment, MirrorNotificationFragment, QuoteNotificationFragment, ReactionNotificationFragment } from "./graphql/notifications.generated.js";
export type NotificationFragment = ActedNotificationFragment | CommentNotificationFragment | FollowNotificationFragment | MentionNotificationFragment | MirrorNotificationFragment | QuoteNotificationFragment | ReactionNotificationFragment;
/**
 * Notifications on many activities for a profile.
 *
 * @group DiGiClient Modules
 */
export declare class Notifications {
    private readonly context;
    private readonly authentication;
    private readonly sdk;
    /**
     * @internal
     */
    constructor(context: DiGiContext, authentication: Authentication);
    /**
     * Fetch notifications.
     *
     * ⚠️ Requires authenticated DiGiClient.
     *
     * @param request - Request object for the query
     * @returns Array of notifications wrapped in {@link PaginatedResult}
     *
     * @example
     * ```ts
     * const result = await client.notifications.fetch();
     * ```
     */
    fetch(request?: NotificationRequest): PromiseResult<PaginatedResult<NotificationFragment>, CredentialsExpiredError | NotAuthenticatedError>;
}
