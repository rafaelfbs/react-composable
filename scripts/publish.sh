#!/usr/bin/env bash

publish () {
    local name=$(cat package.json | grep name | cut -d'"' -f 4)
    local version=$(cat package.json | grep version | cut -d'"' -f 4)
    local currentVersion=$(npm view -s . version)
    if [ -z "$currentVersion" ]; then currentVersion="0.0.0"; fi
    if [ "$version" != "$currentVersion" ]; then
        echo "$currentVersion --> $version";
        yarn publish --access public;
    fi
}

publish
