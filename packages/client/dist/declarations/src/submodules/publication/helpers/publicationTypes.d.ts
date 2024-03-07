import { PickByTypename, Typename } from "../../../types.js";
/**
 * Check if publication is a {@link PostFragment}.
 *
 * @param publication - publication to check
 * @returns true if the result is a {@link PostFragment}
 */
export declare function isPostPublication<T extends Typename<string>>(publication: T): publication is PickByTypename<T, 'Post'>;
/**
 * Check if publication is a {@link CommentFragment}.
 *
 * @param publication - publication to check
 * @returns true if the result is a {@link CommentFragment}
 */
export declare function isCommentPublication<T extends Typename<string>>(publication: T): publication is PickByTypename<T, 'Comment'>;
/**
 * Check if publication is a {@link MirrorFragment}.
 *
 * @param publication - publication to check
 * @returns true if the result is a {@link MirrorFragment}
 */
export declare function isMirrorPublication<T extends Typename<string>>(publication: T): publication is PickByTypename<T, 'Mirror'>;
/**
 * Check if publication is a {@link QuoteFragment}.
 *
 * @param publication - publication to check
 * @returns true if the result is a {@link QuoteFragment}
 */
export declare function isQuotePublication<T extends Typename<string>>(publication: T): publication is PickByTypename<T, 'Quote'>;
