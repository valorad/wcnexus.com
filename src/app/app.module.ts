import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MasonryModule } from 'angular2-masonry';

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

    MasonryModule,

    wcnexusRoutes
  ],
  providers: [ThemeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
