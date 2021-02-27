import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// NECESARIO PARA QUE FUNCIONA DATABINDING BIDIRECCIONAL!
import { FormsModule } from '@angular/forms';

// NECESARIO PARA PIPE CURRENCY!:
import { LOCALE_ID } from '@angular/core';
import '@angular/common/locales/global/es';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [ { provide: LOCALE_ID, useValue: 'es' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
