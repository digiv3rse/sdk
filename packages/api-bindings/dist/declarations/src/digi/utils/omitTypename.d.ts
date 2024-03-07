import { DeepOmit } from '@digiv3rse/shared-kernel';
export declare function omitTypename(target: unknown): never;
export type OmitTypename<T> = Omit<T, '__typename'>;
export type DeepOmitTypename<T> = DeepOmit<T, '__typename'>;
