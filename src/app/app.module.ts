import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {DataTablesModule} from 'angular-datatables';
import { DttestComponent } from './dttest/dttest.component';
import { FotosComponent } from './fotos/fotos.component';
import {ImageZoomModule} from "angular2-image-zoom";
import { GraficasComponent } from './graficas/graficas.component';
import {ChartsModule} from "ng2-charts";

@NgModule({
  declarations: [
    AppComponent,
    DttestComponent,
    FotosComponent,
    GraficasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule,
    ImageZoomModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
