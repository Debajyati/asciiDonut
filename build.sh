#!/bin/bash

# For ESM Export
node_modules/.bin/tsc index.ts --module esnext --moduleResolution Node --outDir ./dist/ -d true --declarationDir ./types
rm dist/index.mjs
mv dist/index.js dist/index.mjs

# For commonjs Export
node_modules/.bin/tsc index.ts --module commonjs --outDir ./dist/
rm dist/index.cjs
mv dist/index.js dist/index.cjs
