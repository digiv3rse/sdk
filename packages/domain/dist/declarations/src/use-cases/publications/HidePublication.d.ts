import { PublicationId } from "../../entities/index.js";
export type HidePublicationRequest = {
    publicationId: PublicationId;
};
export interface IHidePublicationGateway {
    hide(request: HidePublicationRequest): Promise<void>;
}
export interface IHidePublicationPresenter {
    present(publicationId: PublicationId): void;
}
export declare class HidePublication {
    private readonly hidePublicationGateway;
    private readonly hidePublicationPresenter;
    constructor(hidePublicationGateway: IHidePublicationGateway, hidePublicationPresenter: IHidePublicationPresenter);
    hide(request: HidePublicationRequest): Promise<void>;
}
