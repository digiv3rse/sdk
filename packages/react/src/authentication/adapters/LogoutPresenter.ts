import { updateSessionData } from '@digiv3rse/api-bindings';
import {
  anonymousSessionData,
  ILogoutPresenter,
  LogoutReason,
} from '@digiv3rse/domain/use-cases/authentication';

export class LogoutPresenter implements ILogoutPresenter {
  logout(reason: LogoutReason): void {
    updateSessionData(anonymousSessionData(reason));
  }
}
