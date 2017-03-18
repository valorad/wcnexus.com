import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppModule } from "./app/app.module";

import { RootComponent } from "./root.component";

@NgModule({
  declarations: [
    RootComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppModule
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class RootModule { }
