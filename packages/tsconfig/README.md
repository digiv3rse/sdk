## `@digiv3rse/tsconfig`

Project's [TSConfig](https://www.typescriptlang.org/tsconfig) file.

It is not published or released anywhere directly.

## Usage

**Install**:

```bash
$ pnpm add -D @digiv3rse/tsconfig
```

**Install dependencies**

```bash
$ pnpm add tslib@2.5

$ pnpm add -D typescript@5
```

Ensure the version number used matches the peer dependencies criteria of this package `package.json` file.

**Edit `package.json`**:

```json
{
  "extends": "@digiv3rse/tsconfig",

  // package specific options or overrides
  "include": ["./src"]
}
```
