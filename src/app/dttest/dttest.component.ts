import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dttest',
  templateUrl: './dttest.component.html',
  styleUrls: ['./dttest.component.css']
})
export class DttestComponent implements OnInit {

  private dtOptions: any = {};

  constructor() { }

  ngOnInit() {
    this.dtOptions = {
      responsive: true
    };
  }

}
