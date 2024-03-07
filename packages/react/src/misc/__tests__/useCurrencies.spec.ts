import { mockCurrenciesResponse } from '@digiv3rse/api-bindings/mocks';
import { ChainType } from '@digiv3rse/shared-kernel';
import { mockDaiAsset, mockUsdcAsset } from '@digiv3rse/shared-kernel/mocks';
import { waitFor } from '@testing-library/react';

import { setupHookTestScenario } from '../../__helpers__/setupHookTestScenario';
import { useCurrencies } from '../useCurrencies';

describe(`Given the ${useCurrencies.name} hook`, () => {
  describe('when invoked', () => {
    it(`should return the expected list of Erc20`, async () => {
      const chainType = ChainType.POLYGON;
      const currencies = [mockDaiAsset({ chainType }), mockUsdcAsset({ chainType })];

      const { renderHook } = setupHookTestScenario([
        mockCurrenciesResponse({
          variables: {},
          items: currencies,
        }),
      ]);

      const { result } = renderHook(() => useCurrencies());

      await waitFor(() => expect(result.current.loading).toBeFalsy());
      expect(result.current.data).toEqual(currencies);
    });
  });
});
