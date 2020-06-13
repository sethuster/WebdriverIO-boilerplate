#!/bin/sh
#
# Set's the names of the docker images to build
#
# USE:
#   ./scripts/image_names.sh
#
# NOTES:
#   This script is called during the build scripts execution
#
# EXIT CODES
#   Any build failure should produce a non-zero exit code
#

export WDIO_BP_BASE="wdio-boilerplate-base"
export WDIO_BP_RUN="wdio-boilerplate-runner"
export WDIO_BP_USER="sethuster"

