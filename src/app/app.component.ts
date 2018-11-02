import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'heinekenbit';

  constructor(private route: Router){

  }

  home(){
    this.route.navigate(['/']);
    this.title = 'heinekenbit Home';
  }

  table(){
    this.route.navigate(['dttest']);
    this.title = 'heinekenbit Graficando';
  }

  foto(){
    this.route.navigate(['fotos']);
    this.title = 'heinekenbit Fotos';
  }

  grafica(){
    this.route.navigate(['graficas']);
    this.title = 'heinekenbit Graficando';
  }

  reporte(){
    this.route.navigate(['reporte']);
    this.title = 'heinekenbit Reporteando';
  }

}
