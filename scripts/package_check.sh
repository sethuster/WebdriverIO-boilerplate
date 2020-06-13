#!/bin/sh
#
# Check the package.json file for changes.  If Package.json changed this commit
# Build the base image and push it.  If not - Don't. 
#
# USE:
#   ./scripts/package_checksh
#   This script should be run whenever we update dependencies for running smoketest
#
# NOTES:
#   Versioning
#   - Each image is tagged:
#     - with source commit sha1
#     - latest
#
# EXIT CODES
#   Any build failure should produce a non-zero exit code
if [ "$(uname -s)" = "Darwin" ]; then
    # If called through a symlink, this will point to the symlink
    THIS_SCRIPT_DIR="$( cd "$( dirname "${0}" )" && pwd )"
else
    THIS_SCRIPT_DIR=$(dirname $(readlink -f "${0}"))
fi
set -e

# Run from project dir
cd ${THIS_SCRIPT_DIR}/..

LATEST_COMMIT=$(git rev-parse HEAD)
PACKAGE_COMMIT=$(git log -1 --format=format:%H --full-diff ./package.json)

echo "latest ${LATEST_COMMIT}"
echo "package: ${PACKAGE_COMMIT}"

if [ $LATEST_COMMIT = $PACKAGE_COMMIT ];
  then
    echo "package.json file has changed - building base image"
    ./scripts/build-base.sh
else
  echo "no changes to dependencies - moving on..."
  exit 0;
fi

