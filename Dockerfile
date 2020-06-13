FROM sethuster/wdio-boilerplate-base:latest

ARG SOURCE_COMMIT
ARG BUILD_TIME

LABEL sethuster.source-commit=$SOURCE_COMMIT
LABEL sethuster.build-time=$BUILD_TIME

COPY ./bin /test-runner/bin
COPY ./config /test-runner/config
COPY ./test /test-runner/test

CMD ["sudo", "npm", "run", "test"]
