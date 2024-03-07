import { ProfileReportReason } from '@digiv3rse/domain/entities';
import { ReportProfileRequest } from '@digiv3rse/domain/use-cases/profile';
import { UseDeferredTask } from "../helpers/tasks.js";
export { ProfileReportReason };
export type ReportProfileArgs = ReportProfileRequest;
/**
 * Report a profile for a given reason.
 *
 * You MUST be authenticated via {@link useLogin} to use this hook.
 *
 * @example
 * ```tsx
 * const { execute: report, loading } = useReportProfile();
 *
 * const handleSubmit = async () => {
 *   const result = await report({
 *     profileId: profileId('0x01'),
 *     reason: ProfileReportReason.IMPERSONATION,
 *     additionalComments: 'Human readable comments, if any.',
 *   });
 *
 *   if (result.isSuccess()) {
 *     alert('Profile reported!');
 *   }
 * };
 *
 * <button onClick={handleSubmit} disabled={loading}>
 *   Report
 * </button>
 * ```
 *
 * @category Profiles
 * @group Hooks
 */
export declare function useReportProfile(): UseDeferredTask<void, never, ReportProfileArgs>;
