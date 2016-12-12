#!/usr/bin/env bash
npm run build-js
npm run build-octodex

DIR=build
FILENAME=octotab.chromium.zip

rm -rf $DIR
mkdir -p $DIR

zip -r $DIR/$FILENAME dist
