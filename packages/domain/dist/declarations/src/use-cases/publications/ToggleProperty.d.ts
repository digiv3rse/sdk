import { PublicationId } from "../../entities/index.js";
export type TogglePropertyRequest = {
    publicationId: PublicationId;
};
export interface ITogglablePropertyGateway<T extends TogglePropertyRequest> {
    add(request: T): Promise<void>;
    remove(request: T): Promise<void>;
}
export interface ITogglablePropertyPresenter<T extends TogglePropertyRequest> {
    add(data: T): Promise<void>;
    remove(data: T): Promise<void>;
}
export declare class ToggleProperty<T extends TogglePropertyRequest> {
    private readonly gateway;
    private readonly presenter;
    constructor(gateway: ITogglablePropertyGateway<T>, presenter: ITogglablePropertyPresenter<T>);
    add(request: T): Promise<void>;
    remove(request: T): Promise<void>;
}
