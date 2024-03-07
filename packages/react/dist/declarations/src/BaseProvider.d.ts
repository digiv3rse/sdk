import { ReactNode } from 'react';
import { BaseConfig } from "./config.js";
/**
 * <BaseProvider> props
 */
export type BaseProviderProps<TConfig extends BaseConfig> = {
    /**
     * The children to render
     */
    children: ReactNode;
    /**
     * The configuration for the Lens SDK
     */
    config: TConfig;
};
/**
 * Manages the lifecycle and internal state of the Lens SDK
 *
 * @internal
 */
export declare function BaseProvider<TConfig extends BaseConfig>({ children, ...props }: BaseProviderProps<TConfig>): import("react/jsx-runtime").JSX.Element;
