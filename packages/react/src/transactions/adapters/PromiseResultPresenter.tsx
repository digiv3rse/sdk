import { IGenericResultPresenter } from '@digiv3rse/domain/use-cases/transactions';
import { Deferred, IEquatableError, Result } from '@digiv3rse/shared-kernel';

export class PromiseResultPresenter<T, E extends IEquatableError>
  implements IGenericResultPresenter<T, E>
{
  private deferredResult = new Deferred<Result<T, E>>();

  present(result: Result<T, E>): void {
    this.deferredResult.resolve(result);
  }

  asResult(): Promise<Result<T, E>> {
    return this.deferredResult.promise;
  }
}
