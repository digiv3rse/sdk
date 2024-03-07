import { FieldReadFunction } from '@apollo/client';
import { Amount } from '@digiv3rse/shared-kernel';
import { Erc20OwnershipOutput } from '../../digi';
export declare function erc20Amount({ from }: {
    from: Erc20OwnershipOutput;
}): Amount<import("@digiv3rse/shared-kernel/dist/declarations/src/crypto/Asset").Erc20>;
export declare const decryptionCriteria: FieldReadFunction;
