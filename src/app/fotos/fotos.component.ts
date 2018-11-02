import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

/*
  componente
  angular2-image-zoom
  Pagina web:  https://www.npmjs.com/package/angular2-image-zoom
  npm install angular2-image-zoom --save
  <img [imageZoom]="zoomedImageSrc" [src]="smallImageSrc" [style.width.px]="width" [style.height.px]="height">
*/

@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.component.html',
  styleUrls: ['./fotos.component.css']
})
export class FotosComponent implements OnInit {

  urlimg = '';

  constructor() { }

  ngOnInit() {

   /* $('#btn1').on('click', function () {
      alert("Te hiciste pis");
    });*/
  }


  btn1click(){
    alert("te hiciste pis desde angular");
  }

  urlimagen(){
      this.urlimg = '/assets/img/paisaje_en_la_sierra.jpg';
  }

}
