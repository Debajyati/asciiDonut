#!/bin/bash

# For ESM Export
function ESM() {
    node_modules/.bin/tsc index.ts --module esnext --moduleResolution Node --outDir ./dist/ -d true --declarationDir ./types
    rm dist/index.mjs
    mv dist/index.js dist/index.mjs
}

# For commonjs Export
function commonjs() {
    node_modules/.bin/tsc index.ts --module commonjs --outDir ./dist/
    rm dist/index.cjs
    mv dist/index.js dist/index.cjs
}

if [ $# -eq 0 ]; then
    ESM && commonjs
    printf "\033[42m Both Exports building done\033[0m\n"
elif [ "$1" = "-e" ]; then
    ESM
    printf "\033[42m ESM Export building done \033[0m\n"
elif [ "$1" = "-c" ]; then
    commonjs
    printf "\033[42m commonjs Export building done \033[0m\n"
else
    printf "\033[41m Wrong Command! \033[0m\n" >&2
    exit 1
fi
