import { Component, OnInit, Input } from '@angular/core';
import { Label } from 'ng2-charts';
import { ChartType, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: []
})
export class GraficoDonaComponent implements OnInit {

   // Pie
  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'top',
    },
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          const label = ctx.chart.data.labels[ctx.dataIndex];
          return label;
        },
      },
    }
  }; 
  /* @Input() pieChartLabels: Label[] = [['Download', 'Sales'], ['In', 'Store', 'Sales'], 'Mail Sales'];
  @Input() pieChartData: number[] = [300, 500, 100];
  @Input() pieChartType: ChartType = 'pie'; */

  @Input() pieChartLabels: Label[] = [];
  @Input() pieChartData: number[] = [];
  @Input() pieChartType: ChartType;
  public pieChartLegend = true;
  public pieChartColors = [
    {
      backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)'],
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
