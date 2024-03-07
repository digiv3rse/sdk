import { NonEmptyArray, TwoAtLeastArray } from "./ts-helpers/types.js";
export declare function hasAtLeastOne<T>(items: ReadonlyArray<T>): items is NonEmptyArray<T>;
export declare function assertNonEmptyArray<T>(items: ReadonlyArray<T>): asserts items is NonEmptyArray<T>;
export declare function hasJustOne<T>(items: ReadonlyArray<T>): items is [T];
export declare function assertJustOne<T>(items: ReadonlyArray<T>): asserts items is [T];
export declare function removeAtIndex<T>(items: T[], index: number): T[];
export declare function hasTwoOrMore<T>(items: ReadonlyArray<T>): items is TwoAtLeastArray<T>;
