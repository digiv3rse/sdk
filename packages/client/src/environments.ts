import * as GatedEnvironments from '@digiv3rse/gated-content/environments';

/**
 * @internal
 */
export class Environment {
  constructor(
    public readonly name: string,
    private url: string,
    public readonly gated: GatedEnvironments.EnvironmentConfig,
  ) {}

  get gqlEndpoint() {
    return this.url;
  }
}

export const production = new Environment(
  'production',
  'https://api.digiv3rse.xyz',
  GatedEnvironments.production,
);

export const development = new Environment(
  'development',
  'https://api-sepolia.digiv3rse.xyz',
  GatedEnvironments.development,
);

/**
 * @internal
 */
export const staging = new Environment(
  'staging',
  'https://api-sepolia.digiv3rse.xyz/',
  GatedEnvironments.development,
);
