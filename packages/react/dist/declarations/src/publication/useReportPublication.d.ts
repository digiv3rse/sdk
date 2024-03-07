import { PublicationReportReason } from '@digiv3rse/domain/entities';
import { ReportPublicationRequest } from '@digiv3rse/domain/use-cases/publications';
import { UseDeferredTask } from "../helpers/tasks.js";
export { PublicationReportReason };
export type ReportPublicationArgs = ReportPublicationRequest;
/**
 * Report a publication for a given reason.
 *
 * You MUST be authenticated via {@link useLogin} to use this hook.
 *
 * @example
 * ```tsx
 * const { execute: report, loading } = useReportPublication();
 *
 * const handleSubmit = async () => {
 *   const result = await report({
 *     publicationId: publicationId('0x014e-0x0a'),
 *     reason: PublicationReportReason.FAKE_ENGAGEMENT,
 *     additionalComments: 'Human readable comments, if any.',
 *   });
 *
 *   if (result.isSuccess()) {
 *     alert('Publication reported!');
 *   }
 * };
 *
 * <button onClick={handleSubmit} disabled={loading}>
 *   Report
 * </button>
 * ```
 *
 * @category Publications
 * @group Hooks
 */
export declare function useReportPublication(): UseDeferredTask<void, never, ReportPublicationArgs>;
