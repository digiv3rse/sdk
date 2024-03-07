import { BaseProvider, EnvironmentConfig, IBindings, QueryParams } from '@digiv3rse/react';
import { ILogger } from '@digiv3rse/shared-kernel';
import { IObservableStorageProvider, IStorageProvider } from '@digiv3rse/storage';
import { ReactNode } from 'react';

/**
 * `<DiGiProvider>` configuration
 */
export type DiGiConfig = {
  /**
   * Provides integration with the ethers.js Signer and Provider
   */
  bindings: IBindings;
  /**
   * The environment to use. See {@link production} or {@link development}.
   */
  environment: EnvironmentConfig;
  /**
   * The logger interface to use when something worth logging happens
   *
   * @defaultValue `ConsoleLogger`, an internal implementation of `ILogger` interface that logs to the console
   */
  logger?: ILogger;
  /**
   * Enable debug mode. Disable gas estimation on self-funded transactions.
   *
   * @defaultValue `false`
   */
  debug?: boolean;
  /**
   * The storage provider to use.
   *
   * If a implementation of {@link IObservableStorageProvider} is provided,
   * the provider will be used to subscribe to changes in the storage.
   */
  storage: IStorageProvider | IObservableStorageProvider;
  /**
   * The common query params allow you customize some aspect of the returned data.
   */
  params?: QueryParams;
  /**
   * The value of the `Origin` HTTP header to use when making requests to the DiGi API.
   *
   * @example
   * ```md
   * https://example.xyz
   * ```
   *
   * @defaultValue if not provided, the requests will be made without the `Origin` header.
   */
  origin?: string;
  /**
   * Overwrite all onchain transactions to be self-funded if set to `false`.
   *
   * @defaultValue `true`
   */
  sponsored?: boolean;
};

/**
 * <DiGiProvider> props
 */
export type DiGiProviderProps = {
  /**
   * The children to render
   */
  children: ReactNode;
  /**
   * The configuration for the DiGi SDK
   */
  config: DiGiConfig;
};

/**
 * Manages the lifecycle and internal state of the DiGi SDK
 *
 * @group Components
 * @param props - {@link DiGiProviderProps}
 */
export const DiGiProvider = BaseProvider<DiGiConfig>;
