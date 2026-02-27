import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.html',
  styleUrl: './line-chart.scss',
})
export class LineChart implements OnInit {
  public config: any = {
    type: 'line',
    data: {
      labels: ['J', 'F', 'M'],
      datasets: [
        {
          label: 'a',
          data: ['123', '456'],
          backgroundColor: 'blue',
        },
        {
          label: 'b',
          data: ['1456', '859'],
          backgroundColor: 'red',
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Chart.js Line Chart',
        },
      },
    },
  };

  chart: any;

  ngOnInit(): void {
    this.chart = new Chart('line-chart', this.config);
  }
}
