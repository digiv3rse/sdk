import { DiGiContext } from "../context.js";
import { ImageTransform } from "../graphql/index.js";
import { ProfileStatsArg, ProfileStatsCountOpenActionArgs, PublicationOperationsActedArgs, PublicationStatsCountOpenActionArgs, PublicationStatsInput, RateRequest } from "../graphql/types.generated.js";
import { AppId } from "../queryParams.js";
type CommonQueryVariables = {
    publicationImageSmallTransform: ImageTransform;
    publicationImageMediumTransform: ImageTransform;
    publicationOperationsActedArgs: PublicationOperationsActedArgs;
    publicationStatsInput: PublicationStatsInput;
    publicationStatsCountOpenActionArgs: PublicationStatsCountOpenActionArgs;
    profileCoverTransform: ImageTransform;
    profilePictureTransform: ImageTransform;
    profileStatsArg: ProfileStatsArg;
    profileStatsCountOpenActionArgs: ProfileStatsCountOpenActionArgs;
    profileMetadataSource?: AppId;
    rateRequest: RateRequest;
};
export declare function commonQueryVariables({ params }: DiGiContext): CommonQueryVariables;
export {};
