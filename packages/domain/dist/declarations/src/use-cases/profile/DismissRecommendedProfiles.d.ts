import { ProfileId } from "../../entities/index.js";
export type DismissRecommendedProfilesRequest = {
    profileIds: ProfileId[];
};
export interface IDismissRecommendedProfilesGateway {
    dismiss(request: DismissRecommendedProfilesRequest): Promise<void>;
}
export interface IDismissRecommendedProfilesPresenter {
    present(): Promise<void>;
}
export declare class DismissRecommendedProfiles {
    private readonly gateway;
    private readonly presenter;
    constructor(gateway: IDismissRecommendedProfilesGateway, presenter: IDismissRecommendedProfilesPresenter);
    execute(request: DismissRecommendedProfilesRequest): Promise<void>;
}
