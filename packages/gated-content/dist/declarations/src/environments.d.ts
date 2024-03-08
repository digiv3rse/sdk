import { AccessControlContract, SupportedChains } from "./conditions/index.js";
export { SupportedChains };
export type EnvironmentConfig = {
    name: string;
    chainId: number;
    chainName: SupportedChains | string;
    accessControlContract: AccessControlContract;
    patches?: {
        accessControlContract: AccessControlContract;
    };
};
export declare const production: EnvironmentConfig;
export declare const development: EnvironmentConfig;
