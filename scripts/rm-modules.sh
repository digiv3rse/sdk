#!/bin/bash

echo "deleting node_modules"

rm -r ./packages/api-bindings/node_modules
rm -r ./packages/blockchain-bindings/node_modules
rm -r ./packages/client/node_modules
rm -r ./packages/domain/node_modules
rm -r ./packages/gated-content/node_modules
rm -r ./packages/react-web/node_modules
rm -r ./packages/react/node_modules
rm -r ./packages/react-native/node_modules
rm -r ./packages/wagmi/node_modules
rm -r ./packages/shared-kernel/node_modules
rm -r ./packages/eslint-config/node_modules
rm -r ./packages/storage/node_modules
rm -r ./packages/prettier-config/node_modules

echo "Done Deleting"