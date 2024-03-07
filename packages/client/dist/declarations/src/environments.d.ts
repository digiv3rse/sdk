import * as GatedEnvironments from '@digiv3rse/gated-content/environments';
/**
 * @internal
 */
export declare class Environment {
    readonly name: string;
    private url;
    readonly gated: GatedEnvironments.EnvironmentConfig;
    constructor(name: string, url: string, gated: GatedEnvironments.EnvironmentConfig);
    get gqlEndpoint(): string;
}
export declare const production: Environment;
export declare const development: Environment;
/**
 * @internal
 */
export declare const staging: Environment;
