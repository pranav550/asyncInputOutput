import { Component, OnInit } from '@angular/core';
import * as HighCharts from 'highcharts';
var Highcharts ;
var chart1 ;
var chart2;
@Component({
  selector: 'app-global',
  templateUrl: './global.component.html',
  styleUrls: ['./global.component.css']
})
export class GlobalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
       HighCharts.setOptions({
      chart: {
        backgroundColor: {
          linearGradient: [0, 0, 500, 500],
          stops: [
            [0, 'rgb(255, 255, 255)'],
            [1, 'rgb(240, 240, 255)']
          ]
        },
        borderWidth: 2,
        plotBackgroundColor: 'rgba(255, 255, 255, .9)',
        plotShadow: true,
        plotBorderWidth: 1
      },
      credits: {
        enabled: false
    },
    });
    new Highcharts.Chart({
      chart: {
          renderTo: 'container',
          type:'spline',
         
       
      },
      xAxis: {
          type: 'datetime'
      },
      series: [{
          data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
          pointStart: Date.UTC(2010, 0, 1),
          pointInterval: 3600 * 1000 // one hour
      }]
  });
  new Highcharts.Chart({
      chart: {
          renderTo: 'container2',
          type: 'column'
      },
      xAxis: {
          type: 'datetime'
      },
     
      series: [{
          data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
          pointStart: Date.UTC(2010, 0, 1),
          pointInterval: 3600 * 1000 // one hour
      }]
  });
  }
}
