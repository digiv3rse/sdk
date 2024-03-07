import { Credentials } from "../../entities/index.js";
export interface ICredentialsWriter {
    save(credentials: Credentials): Promise<void>;
}
