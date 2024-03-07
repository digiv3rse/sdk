import { Result } from '@digiv3rse/shared-kernel';
import { Credentials, ProfileId } from "../../entities/index.js";
import { ICredentialsWriter } from "./ICredentialsWriter.js";
import { SessionData } from "./SessionData.js";
export type UpgradeCredentialsRequest = {
    profileId: ProfileId;
};
export interface ICredentialsUpgrader {
    upgradeCredentials(profileId: ProfileId): Promise<Credentials>;
}
export interface IUpgradeCredentialsPresenter {
    present(result: Result<SessionData, never>): void;
}
export declare class UpgradeCredentials {
    private readonly credentialsUpgrader;
    private readonly credentialsWriter;
    private readonly presenter;
    constructor(credentialsUpgrader: ICredentialsUpgrader, credentialsWriter: ICredentialsWriter, presenter: IUpgradeCredentialsPresenter);
    execute(request: UpgradeCredentialsRequest): Promise<void>;
}
