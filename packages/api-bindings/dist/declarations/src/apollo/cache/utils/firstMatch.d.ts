export type Matcher<T, R> = (value: T) => R | null;
export declare function firstMatch<T, R>(candidates: T[], matchers: Matcher<T, R>[]): R | null;
