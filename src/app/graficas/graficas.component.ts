import {Component, OnInit} from '@angular/core';

/**
 * Componente usado ng2-charts
 * Url: https://valor-software.com/ng2-charts/
 * npm install ng2-charts --save
 */


@Component({
  selector: 'app-graficas',
  templateUrl: './graficas.component.html',
  styleUrls: ['./graficas.component.css']
})
export class GraficasComponent implements OnInit {

  /*
  Variables del sistema
   */


  private labels: any[] = ['DJ|Edo. Mex.', 'ESM|Edo. Mex.', 'PR|Edo. Mex.', 'SC|Edo. Mex',
    'DJ|Hidalgo', 'ESM|Hidalgo', 'EXP|Hidalgo', 'PR|Hidalgo', 'SC|Hidalgo', 'TR|Hidalgo',
    'BR|Puebla|', ' DJ|Puebla', 'ESM|Puebla', 'SC|Puebla',
    'BR|Tlaxcala', 'DJ|Tlaxcala', 'ESM|Tlaxcala', 'EXP|Tlaxcala', 'PR|Tlaxcala', 'SC|Tlaxcala', 'TR|Tlaxcala'];
  private dataset: any[] = [
    {
      type: 'line',
      label: 'Average of Utilidad Bruta ',
      yAxisID: 'idYAxesL',
      xAxisID: 'idRegion',
      borderColor: 'rgb(153,51,255)',
      borderWidth: 2,
      lineTension: 0,
      fill: false,
      data: [
        13311,
        10451,
        11233,
        9557, 14543, 14616, 13078, 19491, 20120, 18862,
        17185, 16585, 17563, 14335,
        21293, 22994, 16691, 20949, 25150, 16096, 23641
      ]
    },
    {
      type: 'line',
      label: 'Average of Costos de Producción',
      yAxisID: 'idYAxesL',
      xAxisID: 'idRegion',
      borderColor: 'rgb(0,128,255)',
      borderWidth: 2,
      lineTension: 0,
      fill: false,
      data: [
        4755,
        6397,
        7200,
        4771, 8135, 7929, 7428, 8259, 10738, 9157,
        13662, 11670, 11601, 12413,
        10600, 10706, 10595, 10280, 10805, 8985, 12038
      ]
    },
    {
      type: 'bar',
      label: 'Rentabilidad',
      backgroundColor: 'rgb(255,0,0)',
      data: [8556, 4053, 4032, 4786, 6407, 6686, 5649, 11231, 9381, 9704,
        3523, 4915, 5961, 1921,
        10692, 12287, 6095, 10669, 14344, 7110, 11603],
      xAxisID: 'idRegion',
      yAxisID: 'idYAxesR',
      borderColor: 'white',
      borderWidth: 2
    },
    {
      type: 'bar',
      label: 'Costo x Ton.',
      xAxisID: 'idRegion',
      yAxisID: 'idYAxesR',
      backgroundColor: 'rgb(102,178,255)',
      data: [1761, 3064, 3220, 2511, 3137, 2922, 3767, 2568, 2684, 2453,
        4115, 3465, 3310, 4365,
        2538, 2382, 3225, 2475, 2166, 2808, 2561]
    }
  ];

  public lineChartColors: Array<any> = [
    { // grey
      backgroundColor: 'rgba(185,183,17,.7)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#FFFF00',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(199,0,57,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(17,119,185,.7)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#DF01D7',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    {
      backgroundColor: 'rgba(89,185,17,1)',
      borderColor: 'rgba(89,185,17,.5)',
    },
    {
      backgroundColor: 'rgba(185,68,17,1)',
      borderColor: 'rgba(89,185,17,.5)',
    }

  ];

  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true,
    scales: {
      xAxes: [
        {
          id: 'idRegion',
          type: 'category',
          ticks: {
            callback: function (label) {
              var labelArray = label.split('|');
              return labelArray[0];
            }
          }
        },
        {
          id: 'idEstado',
          type: 'category',
          ticks: {
            callback: function (label) {
              var labelArray = label.split('|');
              return labelArray[1];
            },
          }
        }
      ],
      yAxes: [
        {
          id: 'idYAxesL',
          position: 'left',
          ticks: {
            stepSize: 5000,
            min: 0,
            max: 30000
          }
        },
        {
          id: 'idYAxesR',
          position: 'right',
          ticks: {
            stepSize: 2000,
            min: 0,
            max: 16000,
            suggestedMax: 2000,
            suggestedMin: 400
          }
        }
      ]
    }
  };
  public barChartLabels:string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;

  public barChartData:any[] = [
    {
      type: 'bar',
      label: 'Rentabilidad',
      data: [8556, 4053, 4032, 4786, 6407, 6686, 5649, 11231, 9381, 9704,
        3523, 4915, 5961, 1921,
        10692, 12287, 6095, 10669, 14344, 7110, 11603],
      xAxisID: 'idRegion',
      yAxisID: 'idYAxesR'
    },
    {
      type: 'bar',
      label: 'Costo x Ton.',
      data: [1761, 3064, 3220, 2511, 3137, 2922, 3767, 2568, 2684, 2453,
        4115, 3465, 3310, 4365,
        2538, 2382, 3225, 2475, 2166, 2808, 2561],
      xAxisID: 'idRegion',
      yAxisID: 'idYAxesR'
    },
    {
      type: 'line',
      label: 'Average of Utilidad Bruta ',
      borderWidth: 2,
      lineTension: 0,
      fill: false,
      data: [
        13311,
        10451,
        11233,
        9557, 14543, 14616, 13078, 19491, 20120, 18862,
        17185, 16585, 17563, 14335,
        21293, 22994, 16691, 20949, 25150, 16096, 23641
      ],
      yAxisID: 'idYAxesL',
      xAxisID: 'idRegion'
    },
    {
      type: 'line',
      label: 'Average of Costos de Producción',
      borderWidth: 2,
      lineTension: 0,
      fill: false,
      data: [
        4755,
        6397,
        7200,
        4771, 8135, 7929, 7428, 8259, 10738, 9157,
        13662, 11670, 11601, 12413,
        10600, 10706, 10595, 10280, 10805, 8985, 12038
      ],
      yAxisID: 'idYAxesL',
      xAxisID: 'idRegion'
    },

  ];



  constructor() {
  }

  ngOnInit() {
  }


}
