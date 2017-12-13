import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

// mat modules
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

// site shared modules

// routes
import { appRoutes } from './app.route';

// services
import { ThemeService } from './_services/theme.service';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { Http404Component } from './http404/http404.component';

const ngModules = [
  BrowserModule,
  HttpModule
];

const ngMatModules = [
  MatButtonModule,
  MatToolbarModule
]

@NgModule({
  imports: [
    ngModules,
    ngMatModules,

    appRoutes
  ],
  declarations: [
    AppComponent,
    IndexComponent,
    Http404Component
  ],
  providers: [
    ThemeService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }