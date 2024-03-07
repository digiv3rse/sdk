import { PickByTypename, Typename } from "../../../types.js";
/**
 * Check if module settings are {@link UnknownOpenActionModuleSettingsFragment}.
 *
 * @param moduleSettings - moduleSettings to check
 * @returns true if the result is {@link UnknownOpenActionModuleSettingsFragment}
 */
export declare function isUnknownOpenActionModuleSettings<T extends Typename<string>>(moduleSettings: T): moduleSettings is PickByTypename<T, 'UnknownOpenActionModuleSettings'>;
/**
 * Check if module settings are {@link UnknownFollowModuleSettingsFragment}.
 *
 * @param moduleSettings - moduleSettings to check
 * @returns true if the result is {@link UnknownFollowModuleSettingsFragment}
 */
export declare function isUnknownFollowModuleSettings<T extends Typename<string>>(moduleSettings: T): moduleSettings is PickByTypename<T, 'UnknownFollowModuleSettings'>;
/**
 * Check if module settings are {@link UnknownReferenceModuleSettingsFragment}.
 *
 * @param moduleSettings - moduleSettings to check
 * @returns true if the result is {@link UnknownReferenceModuleSettingsFragment}
 */
export declare function isUnknownReferenceModuleSettings<T extends Typename<string>>(moduleSettings: T): moduleSettings is PickByTypename<T, 'UnknownReferenceModuleSettings'>;
