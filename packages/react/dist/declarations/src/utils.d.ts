import { AppId, ProfileId, PublicationId } from '@digiv3rse/domain/entities';
import { Data, URI, URL } from '@digiv3rse/shared-kernel';
/**
 * Ensures that the given value is a valid AppId
 *
 * @group Helpers
 */
export declare function appId(value: string): AppId;
/**
 * Ensures that the given value is a valid ProfileId
 *
 * @group Helpers
 */
export declare function profileId(id: string): ProfileId;
/**
 * Ensures that the given value is a valid PublicationId
 *
 * @group Helpers
 */
export declare function publicationId(id: string): PublicationId;
/**
 * Ensures that the given value is a DataHexString
 *
 * @group Helpers
 */
export declare function data(value: string): Data;
/**
 * Ensures that the given value is a valid URL
 *
 * @group Helpers
 */
export declare function url(value: string): URL;
/**
 * Ensures that the given value is a valid URI
 *
 * @group Helpers
 */
export declare function uri(value: string): URI;
