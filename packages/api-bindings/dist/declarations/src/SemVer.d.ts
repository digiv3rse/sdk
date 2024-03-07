import { Brand } from '@digiv3rse/shared-kernel';
export type SemVer = Brand<string, 'SemVer'>;
export declare function semVer(value: string): SemVer;
