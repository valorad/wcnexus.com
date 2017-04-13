# wcNexus

wcNexus is a nexus of wc worlds. (wc's personal website)

wcNexus is powered by node, as well as [Angular4](https://github.com/angular/angular), and was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.30, having been successfully updated to version 1.0.0.

## Installation

  ### Prerequisites

  - You may require node ^6.9.0, together with npm ^3.0.0.

  - MongoDB distribution of your current system and architecture.

  - A valid [Auth0](https://auth0.com/) account for log-in controls

  ### Distribution

  - Extract dist file

  ### Site config files

  1. `/src/server/wcnexus/wcnexus.json`

  ```
  [{
      "site": "[Your site name eg. wcnexus.com]",
      "auth0": {
          "secret": "[your auth0 secret]",
          "client": "[your auth0 client]"
      },
      "mongo": {
          "db": "[eg. wcnexus]",
          "authDB": "[eg. admin]",
          "user": "[username]",
          "password": "[password]",
          "port": [your port]
      }
  }]
  ```
  2. `/src/assets/data/wcnexus.json`


  ```
  [{
      "site": "[Your site name eg. wcnexus.com]",
      "caseNumber": "[天朝特色备案号]",
      "auth0": {
          "domain": "[Your_auth0_domain.auth0.com]",
          "client": "[your auth0 client]"
      }
  }]
  ```

  ### MongoDB data

  - You need to import following json files to mongo, located in `assets/data`.

    `recomSite.json`  (its collection name to be `recomsites`. Note that collection names should all be uncapialized)

    `theme.json`

    `upcoming.json`

  - You may import to mongo with following command:

    `mongoimport --db [dataDB] --collection [colName] --file [fileName].json [--jsonArray] -u [user] -p [password] --authenticationDatabase [authDB]`
    
    
### Collect node modules
  
  run `npm install` to collect necessary dependencies.
  
  ### You are now good to go

  run `node server/app` to start.

## Development and Compilation

  ### Additional Requirement
  install [angular-cli](https://github.com/angular/angular-cli) ^1.0.0 **GLOBALLY**.

  ### Receive required node modules

  Enter the directory of this repo and `npm install`.

  ### Front-end Dev server
  Run `ng serve` for a front-end only dev server. Navigate to `http://localhost:4200/`.

  The app will automatically reload if you change any of the source files.

  ### Express with MongoDB

  To start the back-end for the first time (or have changed front-end code), you may run `npm run initServer`.

  Later times, you can directly run `npm run server` to quickly start it.

  Navigate to `http://localhost:3000/`. 

  Note that this app will NOT automatically reload.

  Should you change any of the back-end source files, run `npm run _serverBuild` to compile via grunt and `npm run server` to start.

  ### Code scaffolding

  Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

  ### Build

  - Front-end

  Run `ng build` to build the front-end project. The build artifacts will be stored in the `dist/client` directory. The `-prod` flag for a production build is currently **Not Supported**!.

  - Back-end

  Run `npm run _serverBuild` to compile via grunt and `npm run server` to start. The dist files of back-end side will be output to `dist/server` directory.

  ### Running unit tests

  Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

  ### Running end-to-end tests

  Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

  Before running the tests make sure you are serving the app via `ng serve`.

  ### Further help

  To get more help on the `angular-cli` use `ng help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

  And of course you can contact wc (as well as his xiaomajias) directly.
