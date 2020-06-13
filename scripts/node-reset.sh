#!/bin/sh
if [ "$(uname -s)" = "Darwin" ]; then
    # If called through a symlink, this will point to the symlink
    THIS_SCRIPT_DIR="$( cd "$( dirname "${0}" )" && pwd )"
else
    THIS_SCRIPT_DIR=$(dirname $(readlink -f "${0}"))
fi
(
  cd ${THIS_SCRIPT_DIR}/..
  echo "===> Removing node_modules"
  rm -rf node_modules
  rm package-lock.json
  
  echo "===> Reinstalling packages"
  npm i
)
