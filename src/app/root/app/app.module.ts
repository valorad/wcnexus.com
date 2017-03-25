import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { CarouselModule } from 'ng2-bootstrap/carousel';
import { ModalModule } from 'ng2-bootstrap/modal';
 
import { MasonryModule } from 'angular2-masonry';

import 'hammerjs';

import { wcnexusRoutes } from './wcnexus.route';

import { ThemeService } from './theme.service';
import { UpcomingService } from './upcoming.service';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { Http404Component } from './http404/http404.component';
import { VenturerComponent } from './venturer/venturer.component';

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
  providers: [ThemeService, UpcomingService]
  // ,
  // bootstrap: [AppComponent]
})
export class AppModule { }
