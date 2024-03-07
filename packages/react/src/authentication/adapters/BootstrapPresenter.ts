import { updateSessionData } from '@digiv3rse/api-bindings';
import { IBootstrapPresenter, SessionData } from '@digiv3rse/domain/use-cases/authentication';

export class BootstrapPresenter implements IBootstrapPresenter {
  present(session: SessionData): void {
    updateSessionData(session);
  }
}
