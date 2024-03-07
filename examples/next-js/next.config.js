/** @type {import('next').NextConfig} */
const nextConfig = {
  // Until the @apollo-client fixes the ESM modules support (https://github.com/apollographql/apollo-feature-requests/issues/287)
  // it's required to either transpile the `@digiv3rse` packages or make sure they won't get `imported` during SSR.
  transpilePackages: ["@digiv3rse"],
};

module.exports = nextConfig;
