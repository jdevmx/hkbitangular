import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

/*
  Ojo el primer componente pertenece a la pagina web
  https://www.npmjs.com/package/ngx-image-zoom
  <ngx-image-zoom
          [thumbImage]="'assets/img/300px_DSC_0023 copia.png'"
          [fullImage]="'http://www.finally-40.com/wp-content/uploads/2018/02/DSC_0023.png'"
        >
  </ngx-image-zoom>

  Segundo componente
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

  constructor() { }

  ngOnInit() {

   /* $('#btn1').on('click', function () {
      alert("Te hiciste pis");
    });*/
  }


  btn1click(){
    alert("te hiciste pis desde angular");
  }

}
