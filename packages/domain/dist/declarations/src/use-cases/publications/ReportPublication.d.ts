import { PublicationId, PublicationReportReason } from "../../entities/index.js";
import { IGenericResultPresenter } from "../transactions/index.js";
export type ReportPublicationRequest = {
    publicationId: PublicationId;
    reason: PublicationReportReason;
    additionalComments?: string;
};
export interface IReportPublicationGateway {
    report(data: ReportPublicationRequest): Promise<void>;
}
export type IReportPublicationPresenter = IGenericResultPresenter<void, never>;
export declare class ReportPublication {
    private readonly gateway;
    private readonly presenter;
    constructor(gateway: IReportPublicationGateway, presenter: IReportPublicationPresenter);
    report(request: ReportPublicationRequest): Promise<void>;
}
