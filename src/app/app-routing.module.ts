import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DttestComponent} from './dttest/dttest.component';

const routes: Routes = [
  {path: 'dttest', component: DttestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
