import { AfterViewInit, Component } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { getDataAtual, getUltimosSeisMesesConformeMesAtual } from '../../utils/DateUtils';
import { messages } from '../../utils/Messages_json';
import 'chartjs-adapter-date-fns';

Chart.register(...registerables);

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.html',
  styleUrl: './line-chart.scss',
})
export class LineChart implements AfterViewInit {
  dataAtual = getDataAtual();
  ultimos6Meses = getUltimosSeisMesesConformeMesAtual(this.dataAtual.mes, this.dataAtual.ano);
  labels = this.ultimos6Meses.map((m) => m.label);

  public config: any = {
    type: 'line',
    data: {
      labels: this.labels,
      datasets: [
        {
          label: messages['frequencia'],
          data: ['1', '4', '15', '0', '19', '2'],
          borderColor: '#e3bc7b',
          backgroundColor: '#f5d091',
          fill: true,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          labels: {
            color: 'white',
          },
          position: 'top',
          onClick: () => {},
        },
      },
      scales: {
        x: {
          type: 'category',
          display: true,
          position: 'left',
          ticks: {
            color: 'white',
            precision: 0,
          },
        },
        y: {
          type: 'linear',
          display: true,
          position: 'left',
          ticks: {
            color: 'white',
          },
        },
      },
    },
  };

  chart: any;

  ngAfterViewInit(): void {
    this.chart = new Chart('line-chart', this.config);
  }
}
