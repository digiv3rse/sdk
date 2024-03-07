import { Primitive, UnknownObject } from "./ts-helpers/types.js";
export type DeepOmit<T, Filter extends string> = T extends Primitive ? T : T extends Array<infer ItemType> ? ItemType extends UnknownObject ? Array<DeepOmit<ItemType, Filter>> : T : T extends UnknownObject ? {
    [K in keyof T as Exclude<K, Filter>]: DeepOmit<T[K], Filter>;
} : never;
export declare function omitDeep<TData, TKey extends string>(target: TData, omitKey: TKey): DeepOmit<TData, TKey>;
