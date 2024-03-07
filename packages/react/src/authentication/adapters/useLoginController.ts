import { Login, LoginRequest } from '@digiv3rse/domain/use-cases/authentication';

import { useSharedDependencies } from '../../shared';
import { LoginPresenter } from './LoginPresenter';

export function useLoginController() {
  const { credentialsFactory, credentialsGateway, profileCacheManager, walletGateway } =
    useSharedDependencies();

  return async (request: LoginRequest) => {
    const presenter = new LoginPresenter(profileCacheManager);
    const login = new Login(walletGateway, credentialsFactory, credentialsGateway, presenter);

    await login.execute(request);

    return presenter.asResult();
  };
}
