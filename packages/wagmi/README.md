# `@digiv3rse/wagmi`

[wagmi](https://wagmi.sh/) bindings for `@digiv3rse/react`.

> **Warning**
> The Lens SDK is still in its initial development phase. Anything MAY change at any time.
> This is a Developer Preview aimed primarily at existing integrators so to gather early feedback.

## Documentation

- [GitHub monorepo](https://github.com/digiv3rse-protocol/sdk)
- [Getting Started](https://docs.lens.xyz/docs/sdk-react-getting-started)

### Important notes

`react` and `react-dom` is required to be in `devDependencies` to avoid having duplicated `wagmi` due to unmatched optional `peerDependencies` between `examples/web` and `@digiv3rse/wagmi`. See https://github.com/pnpm/pnpm/issues/5351 for more details.
