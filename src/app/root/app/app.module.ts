import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Http, RequestOptions } from '@angular/http';
import { MdModule } from '../../modules/md.module';

import { AUTH_PROVIDERS, AuthHttp, AuthConfig } from 'angular2-jwt';

import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ModalModule } from 'ngx-bootstrap/modal';
 
import { MasonryModule } from 'angular2-masonry';

import 'hammerjs';

import { wcnexusRoutes } from './wcnexus.route';

import { WcnauthService } from '../../services/wcnauth.service';
import { WcnauthGuardService } from '../../services/wcnauth-guard.service';
import { DataService } from '../../services/data.service';
import { RecomSiteService } from '../../services/recom-site.service';
import { ThemeService } from '../../services/theme.service';
import { UpcomingService } from '../../services/upcoming.service';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { Http404Component } from './http404/http404.component';
import { VenturerComponent } from './venturer/venturer.component';

//auth service factory
export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp( new AuthConfig({}), http, options);
}

//ngx-bootstrap modules
const ngxBSModules = [
    CarouselModule.forRoot(),
    ModalModule.forRoot()
]

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

    MdModule,
    ngxBSModules,
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
    DataService,
    RecomSiteService,
    ThemeService, 
    UpcomingService
  ]
  // ,
  // bootstrap: [AppComponent]
})
export class AppModule { }
