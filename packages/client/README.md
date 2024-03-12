# DiGi JavaScript SDK

The official framework-agnostic JavaScript SDK for DiGi Protocol.

---

This package enables you to interact with the DiGi API via a type safe interface that abstracts away some of the GraphQL intricacies.

## Documentation

- [GitHub monorepo](https://github.com/digiv3rse/sdk)
- [Getting Started](https://docs.digiv3rse.xyz/docs/digiclient-sdk-1)
- [Reference](https://digiv3rse.github.io/sdk/modules/_digiv3rse_client.html)

## Quick start

Install the DiGi React Native SDK package using your package manager of choice:

| Package Manager | Command                                    |
| :-------------: | :----------------------------------------- |
|       npm       | `npm install @digiv3rse/client@latest` |
|      yarn       | `yarn add @digiv3rse/client@latest`    |
|      pnpm       | `pnpm add @digiv3rse/client@latest`    |

Development configuration example:

```ts
import { DiGiClient, development } from '@digiv3rse/client';

const client = new DiGiClient({
  environment: development,
});
```

Production configuration example:

```ts
import { DiGiClient, production } from '@digiv3rse/client';

const client = new DiGiClient({
  environment: production,
});
```

In a browser-based implementation you can use the [Web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API) to persist authentication state.

```ts
const client = new DiGiClient({
  environment: production,

  storage: window.localStorage,
});
```
