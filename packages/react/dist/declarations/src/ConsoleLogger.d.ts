import { ILogger } from '@digiv3rse/shared-kernel';
export declare enum ConsoleLoggerLevel {
    Info = 1,
    Warn = 2,
    Error = 3,
    Fatal = 4
}
export declare class ConsoleLogger implements ILogger {
    readonly level: ConsoleLoggerLevel;
    constructor({ level }?: {
        level?: ConsoleLoggerLevel;
    });
    info(message: string, data?: unknown): void;
    warn(message: string, data?: unknown): void;
    error(error: Error, message?: string, data?: unknown): void;
    fatal(error: Error, message?: string, data?: unknown): void;
}
