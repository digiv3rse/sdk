import { AnyTransactionRequestModel } from '@digiv3rse/domain/entities';
import {
  TransactionData,
  ITransactionResponder,
} from '@digiv3rse/domain/use-cases/transactions';

export class NoopResponder<T extends AnyTransactionRequestModel>
  implements ITransactionResponder<T>
{
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  async commit(_: TransactionData<T>) {}
}
