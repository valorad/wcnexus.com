## example to build and run
# docker build . -t wcnexus.com --build-arg username=$USER
# docker run -d -p 3000:3000 --name wcnexus.com-c1 -e EXEC_USER=$USER -e EXEC_USER=$UID -v /path/to/your/server/config:/dist/server/config -v /path/to/your/server/static:/dist/server/static wcnexus.com

FROM node:alpine
LABEL maintainer="Valroad <valorad@outlook.com>"

RUN echo " --- Software installation starts --- " \
 && apk update \
 && apk add su-exec \
 && rm -rf /var/cache/apk/*

ARG username=valorad
ADD ./dist /dist

WORKDIR /dist
RUN echo " --- Node module collection starts --- " \
 # node module collection
 && npm install \
 && npm cache clean --force

# RUN echo " --- User initialization starts --- " \
#  # new normal user and his permission setup
#  && adduser $username -D -H -s /bin/sh \
#  && chmod -R 755 /dist

VOLUME ["/dist"]
ENV EXEC_USER=valorad
ENV EXEC_USER_ID=1000
ENTRYPOINT ["/dist/index.sh"]
CMD npm start