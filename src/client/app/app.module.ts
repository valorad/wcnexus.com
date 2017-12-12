import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

// routes
import { appRoutes } from './app.route';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { Http404Component } from './http404/http404.component';

const ngModules = [
  BrowserModule,
  HttpModule
];

@NgModule({
  imports: [
    ngModules,

    appRoutes

  ],
  declarations: [
    AppComponent,
    IndexComponent,
    Http404Component
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }