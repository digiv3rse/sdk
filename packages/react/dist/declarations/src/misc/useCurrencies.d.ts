import { PaginatedOffsetRequest } from '@digiv3rse/api-bindings';
import { Erc20 } from '@digiv3rse/shared-kernel';
import { PaginatedArgs, PaginatedReadResult } from "../helpers/reads.js";
/**
 * {@link useCurrencies} hook arguments
 */
export type UseCurrenciesArgs = PaginatedArgs<PaginatedOffsetRequest>;
/**
 * `useCurrencies` is a paginated hook that lets you fetch ERC20 tokens that are enabled on the DiGi protocol.
 *
 * **Pro-tip**: use this hook to populate a dropdown menu of currencies to choose from
 * to support for example a collect open action form or setup follow policy fees.
 *
 * @category Misc
 * @group Hooks
 *
 * @example
 * ```tsx
 * const { data, loading, error } = useCurrencies();
 * ```
 *
 * @example
 * ```tsx
 * function CurrencySelector({ onChange }: { onChange: (currency: Erc20) => void }) {
 *   const { data: currencies, error, loading } = useCurrencies();
 *
 *   if (loading) return <p>Loading...</p>;
 *
 *   if (error) return <p>Error: {error.message}</p>;
 *
 *   const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
 *     const currency = currencies.find((c) => c.symbol === event.target.value);
 *     if (currency) onChange(currency);
 *   };
 *
 *   return (
 *     <select onChange={handleChange}>
 *       {currencies.map((c) => (
 *         <option key={c.address} value={c.symbol}>
 *           {c.name}
 *         </option>
 *       ))}
 *     </select>
 *   );
 * }
 * ```
 */
export declare function useCurrencies(args?: UseCurrenciesArgs): PaginatedReadResult<Erc20[]>;
