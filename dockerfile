# TODO: Front-end builder

# FROM node:16-alpine as builder-client

# WORKDIR /build

# ADD ./client ./

# RUN yarn install --frozen-lockfile \
#  && yarn build

# ============================================================
FROM mcr.microsoft.com/dotnet/sdk:5.0 AS builder-server

WORKDIR /src

ADD ./server/WCNexus.App ./

RUN dotnet restore \
&& dotnet publish -c Release -o /dist

# ============================================================
FROM mcr.microsoft.com/dotnet/aspnet:5.0-alpine AS runner

ARG BASE_DIR=/workspace/www/wcnexus.com

WORKDIR ${BASE_DIR}

COPY --from=builder-server /dist .
# COPY --from=builder-client /build/build ./wwwroot/

VOLUME ${BASE_DIR}"/appsettings.Production.yaml"
VOLUME ${BASE_DIR}"/secrets.yaml"

EXPOSE 5000

ENTRYPOINT ["dotnet", "WCNexus.App.dll"]