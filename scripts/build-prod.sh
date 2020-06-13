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
    source ./scripts/image_names.sh

    docker pull "${WDIO_BP_USER}/${WDIO_BP_BASE}:latest"

    IMAGE_NAME="${WDIO_BP_USER}/${WDIO_BP_RUN}"
    BUILD_TIME=$(date +"%Y%m%d_%H%M%S")

    echo "===> Building ${IMAGE_NAME}:${BUILD_TIME}"

    docker build                                  \
      --build-arg "BUILD_TIME=${BUILD_TIME}"      \
      -t "${IMAGE_NAME}:latest"                   \
      .
)
