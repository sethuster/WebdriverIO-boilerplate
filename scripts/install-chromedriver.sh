#!/bin/sh


LATEST_VERSION=$(curl https://chromedriver.storage.googleapis.com/LATEST_RELEASE)
npx selenium-standalone install --drivers.chrome.version=${LATEST_VERSION} --drivers.chrome.baseURL=https://chromedriver.storage.googleapis.com
