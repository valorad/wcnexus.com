## TODO

FROM node:alpine
LABEL maintainer="Valroad <valorad@outlook.com>"

RUN echo " --- Software installation starts --- " \
 && apk update \
 && apk add sudo \
 && rm -rf /var/cache/apk/*

ARG username=valorad
ADD ./dist /dist

WORKDIR /dist
RUN echo " --- Node module collection starts --- " \
 # node module collection
 && npm install \
 && npm cache clean --force

RUN echo " --- User initialization starts --- " \
 # new normal user and his permission setup
 && adduser $username -D -H -s /bin/sh \
 && chmod -R 755 /dist

VOLUME ["/dist"]
ENV EXEC_USER=valorad
ENTRYPOINT ["/dist/index.sh"]
