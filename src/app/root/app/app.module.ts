import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { DropdownModule } from 'ng2-bootstrap/dropdown';
import { CarouselModule } from 'ng2-bootstrap/carousel';
 
import { MasonryModule } from 'angular2-masonry';

import 'hammerjs';

import { wcnexusRoutes } from './wcnexus.route';

import { ThemeService } from './theme.service';

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

    DropdownModule.forRoot(),
    CarouselModule.forRoot(),
    MasonryModule,

    wcnexusRoutes
  ],
  exports: [AppComponent],
  providers: [ThemeService]
  // ,
  // bootstrap: [AppComponent]
})
export class AppModule { }
