import { Wallet } from '@ethersproject/wallet';

import { buildTestEnvironment } from '../../__helpers__';
import { DiGiClient } from '../DiGiClient';

export function createGatedDiGiClient(signer: Wallet) {
  return new DiGiClient({
    environment: buildTestEnvironment(),
    authentication: {
      domain: 'digi.dev',
      uri: 'https://digi.dev',
    },
    signer,
  });
}
