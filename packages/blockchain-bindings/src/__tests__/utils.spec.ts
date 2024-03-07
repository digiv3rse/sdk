import { Amount } from '@digiv3rse/shared-kernel';
import { mockDaiAmount } from '@digiv3rse/shared-kernel/mocks';
import { BigNumber } from 'ethers';

import { bigNumber } from '../utils';

describe('Given the utils module', () => {
  describe(`when the '${bigNumber.name}' function is called with an '${Amount.name}' instance`, () => {
    it(`should return a '${BigNumber.name}' that represent the amount in the smallest denomination for the given amount currency`, async () => {
      const amount = mockDaiAmount(1);

      const number = bigNumber(amount);

      expect(number).toEqual(BigNumber.from('1000000000000000000'));
    });
  });
});
