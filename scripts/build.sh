#!/bin/sh
#
# Build the test docker image
#
# USE:
#   ./scripts/build.sh
#
# NOTES:
#   Versioning
#   - Each image is tagged:
#     - with source commit sha1
#     - latest
#
# EXIT CODES
#   Any build failure should produce a non-zero exit code
#
if [ "$(uname -s)" = "Darwin" ]; then
    # If called through a symlink, this will point to the symlink
    THIS_SCRIPT_DIR="$( cd "$( dirname "${0}" )" && pwd )"
else
    THIS_SCRIPT_DIR=$(dirname $(readlink -f "${0}"))
fi
(
    # Run from project dir
    cd ${THIS_SCRIPT_DIR}/..
    docker pull sethuster/wdio-boilerplate-base:latest

    IMAGE_NAME="sethuster/wdio-boilerplate-runner"
    BUILD_TIME=$(date +"%Y%m%d_%H%M%S")

    echo "===> Building ${IMAGE_NAME}:${BUILD_TIME}"

    docker build                                  \
      --build-arg "SOURCE_COMMIT=${CIRCLE_SHA1}"  \
      --build-arg "BUILD_TIME=${BUILD_TIME}"      \
      -t "${IMAGE_NAME}:${CIRCLE_SHA1}"           \
      -t "${IMAGE_NAME}:latest"                   \
      .
)
