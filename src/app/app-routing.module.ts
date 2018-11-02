import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DttestComponent} from './dttest/dttest.component';
import {FotosComponent} from "./fotos/fotos.component";
import {GraficasComponent} from "./graficas/graficas.component";
import {ReporteComponent} from "./reporte/reporte.component";
import {Error404Component} from "./error404/error404.component";

const routes: Routes = [
  {path:'', redirectTo:'', pathMatch: 'full'},
  {path: 'dttest', component: DttestComponent},
  {path: 'fotos', component: FotosComponent},
  {path: 'graficas', component: GraficasComponent},
  {path: 'reporte', component: ReporteComponent},
  {path: '**', component: Error404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
