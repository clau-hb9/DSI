import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GlobalService } from './global.service';

import {TableModule} from 'primeng/table';
import 'hammerjs';

//Nuevos
import {MatIconModule} from '@angular/material/icon';
//import {FlexLayoutModule} from '@angular/flex-layout';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatBadgeModule} from '@angular/material/badge';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,//RouterModule,
    BrowserAnimationsModule, //FlexLayoutModule,
    FormsModule,MatFormFieldModule, MatIconModule, TableModule, MatMenuModule, MatToolbarModule
  ],

  providers: [GlobalService],
  bootstrap: [AppComponent]
})
export class AppModule { }

