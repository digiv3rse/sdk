type PollArgs<T> = {
    fn: (...args: unknown[]) => Promise<T>;
    validate: (result: T) => boolean;
    onMaxAttempts: () => Error | void;
    interval?: number;
    maxAttempts?: number;
};
export declare function poll<T>({ fn, validate, onMaxAttempts, interval, maxAttempts, }: PollArgs<T>): Promise<T>;
export {};
