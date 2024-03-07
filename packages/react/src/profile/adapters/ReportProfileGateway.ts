import {
  SafeApolloClient,
  ProfileReportingFraudSubreason,
  ProfileReportingReason,
  ProfileReportingSpamSubreason,
  ReportProfileDocument,
  ReportProfileData,
  ReportProfileVariables,
  ProfileReportingReasonInput,
} from '@digiv3rse/api-bindings';
import { ProfileReportReason } from '@digiv3rse/domain/entities';
import {
  IReportProfileGateway,
  ReportProfileRequest,
} from '@digiv3rse/domain/use-cases/profile';
import { assertNever } from '@digiv3rse/shared-kernel';

const mapReportReasonToInput = (reason: ProfileReportReason): ProfileReportingReasonInput => {
  switch (reason) {
    case ProfileReportReason.IMPERSONATION:
      return {
        fraudReason: {
          reason: ProfileReportingReason.Fraud,
          subreason: ProfileReportingFraudSubreason.Impersonation,
        },
      };
    case ProfileReportReason.FRAUD_SOMETHING_ELSE:
      return {
        fraudReason: {
          reason: ProfileReportingReason.Fraud,
          subreason: ProfileReportingFraudSubreason.SomethingElse,
        },
      };
    case ProfileReportReason.REPETITIVE:
      return {
        spamReason: {
          reason: ProfileReportingReason.Spam,
          subreason: ProfileReportingSpamSubreason.Repetitive,
        },
      };
    case ProfileReportReason.SPAM_SOMETHING_ELSE:
      return {
        spamReason: {
          reason: ProfileReportingReason.Spam,
          subreason: ProfileReportingSpamSubreason.SomethingElse,
        },
      };

    default:
      assertNever(reason, `Unknown report type`);
  }
};

export class ReportProfileGateway implements IReportProfileGateway {
  constructor(private apolloClient: SafeApolloClient) {}

  async report({ additionalComments, profileId, reason }: ReportProfileRequest) {
    await this.apolloClient.mutate<ReportProfileData, ReportProfileVariables>({
      mutation: ReportProfileDocument,
      variables: {
        request: {
          for: profileId,
          additionalComments,
          reason: {
            ...mapReportReasonToInput(reason),
          },
        },
      },
    });
  }
}
