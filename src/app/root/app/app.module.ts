import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AUTH_PROVIDERS, AuthHttp, AuthConfig } from 'angular2-jwt';

import { CarouselModule } from 'ng2-bootstrap/carousel';
import { ModalModule } from 'ng2-bootstrap/modal';
 
import { MasonryModule } from 'angular2-masonry';

import 'hammerjs';

import { wcnexusRoutes } from './wcnexus.route';

import { WcnauthService } from './wcnauth.service';
import { WcnauthGuardService } from './wcnauth-guard.service';
import { ThemeService } from './theme.service';
import { UpcomingService } from './upcoming.service';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { Http404Component } from './http404/http404.component';
import { VenturerComponent } from './venturer/venturer.component';

//auth service factory
import {Http, RequestOptions} from '@angular/http';

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp( new AuthConfig({}), http, options);
}

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    Http404Component,
    VenturerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,

    CarouselModule.forRoot(),
    ModalModule.forRoot(),
    
    MasonryModule,

    wcnexusRoutes
  ],
  exports: [AppComponent],
  providers: [
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [ Http, RequestOptions ]
    },
    WcnauthService, 
    WcnauthGuardService, 
    ThemeService, 
    UpcomingService
  ]
  // ,
  // bootstrap: [AppComponent]
})
export class AppModule { }
