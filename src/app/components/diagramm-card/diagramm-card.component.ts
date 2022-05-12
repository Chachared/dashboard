import { Component, OnInit } from '@angular/core';
import { Chart, ChartDataset, ChartOptions, ChartType } from 'chart.js';

@Component({
  selector: 'app-diagramm-card',
  templateUrl: './diagramm-card.component.html',
  styleUrls: ['./diagramm-card.component.css'],
})
export class DiagrammCardComponent implements OnInit {
  type!: ChartType;
  labels!: string[];
  datasets!: ChartDataset[];
  options!: ChartOptions;

  constructor() {}

  ngOnInit(): void {
    this.type = 'pie';

    this.labels = ['Red', 'Orange', 'Yellow', 'Green', 'Blue'];

    this.datasets = [
      {
        label: 'Dataset 1',
        data: [20, 10, 5, 15, 50],
        backgroundColor: ['Red', 'Orange', 'Yellow', 'Green', 'Blue'],
      },
    ];

    this.options = {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Chart.js Doughnut Chart',
        },
      },
    };
  }
}
