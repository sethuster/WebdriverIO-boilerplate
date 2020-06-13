#!/bin/sh
#
# Build the base image
#
# USE:
#   ./scripts/build-base.sh
#   This script should be run whenever we update dependencies for running smoketest
#   Also a new MAJOR Chrome Version is released
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

    IMAGE_NAME="sethuster/wdio-boilerplate-base"
    BUILD_TIME=$(date +"%Y%m%d_%H%M%S")

    echo "===> Building ${IMAGE_NAME}:${BUILD_TIME}"

    docker build                                  \
      --file=Dockerfile.base                      \
      --build-arg "BUILD_TIME=${BUILD_TIME}"      \
      -t "${IMAGE_NAME}:${BUILD_TIME}"           \
      -t "${IMAGE_NAME}:latest"                   \
      .
     
    echo "===> Pushing ${IMAGE_NAME}:latest"
    docker push $IMAGE_NAME:latest
    echo "===> Pushing ${IMAGE_NAME}:${BUILD_TIME}"
    docker push $IMAGE_NAME:${BUILD_TIME}

)
