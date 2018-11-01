import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DttestComponent} from './dttest/dttest.component';
import {FotosComponent} from "./fotos/fotos.component";

const routes: Routes = [
  {path: 'dttest', component: DttestComponent},
  {path: 'fotos', component: FotosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
