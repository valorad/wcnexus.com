# wcnexus

wcnexus is wc's personal website as nexus.

wcnexus v3 is powered by nodejs, with [Angular5][ng] at the front, and [koa][koa] at the back. The mighty angular-cli has been substituted by a dedicated webpack since version 3.

## Prerequisites
- If deploy via docker:
  - Docker > 17.03

- Manually deploy:
  - node.js > 6.9.0
  - (optional) nginx
  - (optional) pm2

## Production Deployment
- Download release dist to your server, and head over to that folder you extracted files to.
- `npm install` or `yarn install` to collect node modules.
- Firing up.

- If you just would like to try it out, you just simply go with `node server/wcnexus`. You may then navigate to http://localhost:3000.
- If deploying on a production server is your case, then you have to perform the following steps:

  - Via Docker:
  ``` bash
  docker run -d -p 3000:3000 \  
    --name wcnexus.com-c1
    -e EXEC_USER=$USER -e EXEC_USER=$UID \
    -v /path/to/your/server/config:/dist/server/config \
    -v /path/to/your/server/static:/dist/server/static \
    valorad/wcnexus.com
  ```
  (Optional) Then build and deploy your own `nginx` image.

  - Manually:
    - Properly configure your nginx.
    - [pm2][pm2] is recommended to hold up your node.js app. Running `pm2 start server/wcnexus` will do the trick.

  - Visit http://example.com:80 and you are good to go.

## Nginx Example Config:

    ``` dockerfile
    # Dockerfile
    FROM nginx:alpine

    COPY default.conf /etc/nginx/conf.d/default.conf

    VOLUME [ "/www" ]

    EXPOSE 80
    ```

    ``` conf
      # default.conf
      # OS: Alpine Linux 3.7
      server {
          listen       80;
          server_name  www.wcnexus.com;
          charset utf-8;
          location / {
              proxy_pass http://127.0.0.1:3000;
              proxy_http_version 1.1;
              proxy_set_header Upgrade $http_upgrade;
              proxy_set_header Connection 'upgrade';
              proxy_set_header Host $host;
              proxy_cache_bypass $http_upgrade;
          }
        ...
      }
    ```

## Development
``` bash
npm run xxx
```

in which xxx being:

| -        | dev                           | compile            | start                |
| :------: | :---------------------------: | :----------------: | :------------------: |
| front    | `serve:c`(Webpack-dev-server) | `build:c`(Webpack) | N/A                  |
| back     | N/A                           | `build:s`(Webpack) | `start:s` (koa only) |
| post     | N/A                           | `build:p`(node)    | N/A                  |
| together | N/A                           | `build`(Webpack)   | `start` (koa)        |

## Unit Testing
To execute the unit tests via [Karma][Karma], run:
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
[Karma]:(https://karma-runner.github.io)