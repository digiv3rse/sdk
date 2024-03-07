import { Amount, Erc20, Erc20Amount } from '@digiv3rse/shared-kernel';
import { Erc20AmountFields, ModuleFeeAmount, ModuleFeeAmountParams } from '../generated';
export declare function erc20Amount({ from }: {
    from: Erc20AmountFields | ModuleFeeAmount;
}): Erc20Amount;
export declare function moduleFeeAmountParams({ from }: {
    from: Amount<Erc20>;
}): ModuleFeeAmountParams;
