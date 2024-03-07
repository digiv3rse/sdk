import type { CreateMomokaPublicationResultFragment, RelaySuccessFragment } from "../../../graphql/fragments.generated.js";
/**
 * Check if the result is a {@link RelaySuccessFragment}.
 *
 * @param result - result to check
 * @returns true if the result is a {@link RelaySuccessFragment}
 */
export declare function isRelaySuccess<T extends {
    reason: string;
}>(result: RelaySuccessFragment | T): result is RelaySuccessFragment;
/**
 * Check if the result is a {@link CreateMomokaPublicationResultFragment}.
 *
 * @param result - result to check
 * @returns true if the result is a {@link CreateMomokaPublicationResultFragment}
 */
export declare function isCreateMomokaPublicationResult<T extends {
    reason: string;
}>(result: CreateMomokaPublicationResultFragment | T): result is CreateMomokaPublicationResultFragment;
