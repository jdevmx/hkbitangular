import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {DataTablesModule} from 'angular-datatables';
import { DttestComponent } from './dttest/dttest.component';
import { FotosComponent } from './fotos/fotos.component';
import {NgxImageZoomModule} from "ngx-image-zoom";
import {ImageZoomModule} from "angular2-image-zoom";

@NgModule({
  declarations: [
    AppComponent,
    DttestComponent,
    FotosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule,
    NgxImageZoomModule.forRoot(),
    ImageZoomModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
