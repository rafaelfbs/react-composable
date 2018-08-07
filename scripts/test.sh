#!/bin/bash
set -e

node="node"
jestArgs=()

jestArgs+=("--maxWorkers=4")
jestArgs+=("--ci")
jestArgs+=("packages/.*/tests")

cd $(pwd)
$node node_modules/jest/bin/jest.js "${jestArgs[@]}"