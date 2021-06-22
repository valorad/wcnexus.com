# wcnexus

![cover](https://i.imgur.com/4X1aCVI.png)

Site wcnexus.com is Chenxuan (Steve)'s personal website.

The original purpose of developing this website was to practice my skills in software development, it was also one of my wish of having my own website a couple of years ago.

This branch represents the latest v4 development. See the master branch for current online version (v3).

## Deployment

Two config files need to be prepared in advance: `appsettings.Production.yaml` and `secrets.yaml`.

To find out what values to provide in `appsettings`, please refer to [Configuration in ASP.NET Core](https://docs.microsoft.com/en-us/aspnet/core/fundamentals/configuration/?view=aspnetcore-5.0).

The `secrets.yaml` stores DB connection information. Please refer to the [example file](./server/WCNexus.App/secrets.example.yaml).

Next, choose one of following deploy methods.

### Kubernetes

(Still planning)

### Docker Compose

Please create your own `docker-compose.yaml` in your work directory, by following the [example file](./doc/docker-compose.example.yaml).

Create a bridge network by: `docker network create main`

Then switch to that directory and run `docker-compose up -d`

### Docker Manually

The following is the command for manually running a container from docker cli.

``` bash

# Create a bridge network if not yet
docker network create main

docker run -d \
--network main \
--user "1000" \
-v [/path/to/appsettings.Production.yaml]:/workspace/www/wcnexus.com/appsettings.Production.yaml \
-v [/path/to/secrets.yaml]:/workspace/www/wcnexus.com/secrets.yaml \
ghcr.io/valorad/wcnexus.com

```

### Entirely Manually

1. Install [.NET 5 Runtime](https://dotnet.microsoft.com/download/dotnet/5.0) according to your OS environment.

2. Download the latest release file and extract it to your working directory.

3. Put all the config files to that directory as well.

4. To start, run `dotnet WCNexus.App.dll`.

## Development

==> [Server](https://github.com/valorad/wcnexus-server)

Server is powered by .NET 5 (C#) with normal REST APIs. The Data are stored in MongoDB.

The API document is generated by swagger, which implements the OpenAPI v3 standard. To check the document, you need to import the [API Dataset](./doc/insomnia_wcnexus.com.json) to the [Insomnia](https://insomnia.rest/) client.

==> [Client](https://github.com/valorad/wcnexus-client)

Client is currently work in progress. Featuring Angular 11 (TypeScript) + Reveal.js 4.

## Class Diagram

![classDiagram](./doc/class-diagram.png)