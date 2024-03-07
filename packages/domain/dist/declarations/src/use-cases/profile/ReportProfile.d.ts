import { ProfileId, ProfileReportReason } from "../../entities/index.js";
import { IGenericResultPresenter } from "../transactions/IGenericResultPresenter.js";
export type ReportProfileRequest = {
    profileId: ProfileId;
    reason: ProfileReportReason;
    additionalComments?: string;
};
export interface IReportProfileGateway {
    report(data: ReportProfileRequest): Promise<void>;
}
export type IReportProfilePresenter = IGenericResultPresenter<void, never>;
export declare class ReportProfile {
    private readonly gateway;
    private readonly presenter;
    constructor(gateway: IReportProfileGateway, presenter: IReportProfilePresenter);
    report(request: ReportProfileRequest): Promise<void>;
}
