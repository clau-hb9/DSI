import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { option2Component } from './option2/option2.component';
import { select2Component } from './select2/select2.component';

@NgModule({
  declarations: [
    AppComponent,
    option2Component,
    select2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
