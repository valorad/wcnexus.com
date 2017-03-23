# wcNexus

wcNexus is a nexus of wc worlds. (wc's personal website)

wcNexus is powered by node, as well as [Angular2](https://github.com/angular/angular), and was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.30, having been successfully updated to version 1.0.0-rc.4.

## Prerequisites and Deployment

- According to @angular/cli, you may require node ^6.9.0, together with npm ^3.0.0.
- Install MongoDB distribution of your current system and architecture.
- install [angular-cli](https://github.com/angular/angular-cli) ^1.0.0.rc4 **GLOBALLY**.
- Enter the directory of this repo and `npm install`.

## Front-end Dev server
Run `ng serve` for a front-end only dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Express with MongoDB
Express is ok, but connection to Mongo is still being working on. 

To start the back-end for the first time (or have changed front-end code), you may run `npm run initServer`.

Later times, you can directly run `npm run server` to quickly start it.

Navigate to `http://localhost:3000/`. 

Note that this app will NOT automatically reload.

Should you change any of the back-end source files, run `npm run _serverBuild` to compile via grunt and `npm run server` to start.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

### Front-end

Run `ng build` to build the front-end project. The build artifacts will be stored in the `dist/client` directory. The `-prod` flag for a production build is currently **Not Supported**!.

### Back-end

Run `npm run _serverBuild` to compile via grunt and `npm run server` to start. The dist files of back-end side will be output to `dist/server` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the `angular-cli` use `ng help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

And of course you can contact wc (as well as his xiaomajias) directly.