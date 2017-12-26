import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// mat modules
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';

// ngx-translate
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// site shared modules


// routes
import { appRoutes } from './app.route';

// services
import { DataService } from "@xmj-alliance/lib-ngx";

import { ThemeService } from './_services/theme.service';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { Http404Component } from './http404/http404.component';

const ngModules = [
  BrowserModule,
  BrowserAnimationsModule,
  HttpModule,
  HttpClientModule,
  FormsModule
];

const ngMatModules = [
  MatButtonModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatCardModule,
  MatMenuModule
]

// AoT requires an exported function for factories
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './statics/i18n/', '.json');
}

@NgModule({
  imports: [
    ngModules,
    ngMatModules,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: (createTranslateLoader),
          deps: [HttpClient]
      }
    }),

    appRoutes
  ],
  declarations: [
    AppComponent,
    IndexComponent,
    Http404Component
  ],
  providers: [
    DataService,
    
    ThemeService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }