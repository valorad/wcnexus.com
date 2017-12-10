# wcnexus

wcnexus is wc's personal website as nexus.

wcnexus v3 is powered by nodejs, with [Angular5][ng] at the front, and [koa][koa] at the back. The mighty angular-cli has been substituted by a dedicated webpack since version 3.

## Prerequisites
- MongoDB > 3.4.0

- Method 1 (Not available yet):
  - Docker 

- Method 2:
  - node.js > 6.9.0
  - (optional) nginx
  - (optional) pm2

## Production Deployment
- Download release dist to your server, and head over to that folder you extracted files to.
- Fill in your configuration for your site and mongoDB.
- `npm install` or `yarn install` to collect node modules.
- Firing up.

  - If you just would like to try it out, you just simply go with `node server/wcnexus`. You may navigate to http://localhost:3000 after this. If deploying on a production server is your case, then you have to perform the following steps:

  - Properly configure your nginx. (e.g. is WIP)

  - [pm2][pm2] is recommended to hold up your node.js app. Running `pm2 start server/wcnexus` will do the trick.
  
- Note: You may also use [Docker][docker] to hold this site after installing Docker on your server. Once the docker image has been uploaded to docker cloud by me (not yet, sry😂), you can also make quick installation by executing `docker run valorad/wcnexus.com`.

- visit http://example.com and you are good to go.

## Development
``` bash
npm run xxx
```

in which xxx being:

|   -   |  dev   |  compile  | start|
|:-----:|:------:|:-----:|:-----:|
|  front  |  `serve:c`[Webpack-dev-server]|  `build:c`[Webpack]  | N/A
|  back  |  N/A  |  `build:s`[Webpack]  | `start:s` [koa only]
|  together  |  N/A  |  `build`[Webpack] | `start` [koa]

## Unit Testing
To execute the unit tests via [Karma](https://karma-runner.github.io), run:
``` bash
npm run test
```
## Code scaffolding
Copy and paste the `dummy` module.

## License
MIT

[ng]:https://github.com/angular/angular
[koa]:https://github.com/koajs/koa
[pm2]:https://github.com/Unitech/pm2
[docker]:https://www.docker.com/