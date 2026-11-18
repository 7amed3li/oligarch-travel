#!/bin/sh
# Oligarch Travel — standalone start.
# Copies runtime assets next to the standalone server, then launches it.
# data/prices.json lives beside server.js so /admin edits persist there.
cd "$(dirname "$0")"
cp -r public .next/standalone/public 2>/dev/null
mkdir -p .next/standalone/.next
cp -r .next/static .next/standalone/.next/static 2>/dev/null
[ -d .next/standalone/data ] || cp -r data .next/standalone/data
PORT="${PORT:-3000}" HOSTNAME="${HOSTNAME:-0.0.0.0}" exec node .next/standalone/server.js
