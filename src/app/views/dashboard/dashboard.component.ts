import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth/auth-service.service";
import {Router} from "@angular/router";
import {DatasService} from "../../services/datas/datas.service";
import {Stats} from "../../models/stats";
import {ChartDataset, ChartOptions, ChartType} from "chart.js";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {

  loader = true;
  stats!: Stats;
  type!: ChartType;
  labels!: string[];
  datasets!: ChartDataset[];
  options!: ChartOptions;

  constructor(private authService: AuthService, private router: Router, private datasService: DatasService) {}

  ngOnInit(): void {
    this.datasService.getStats().subscribe(data => {
      this.stats = data;
      this.loader = false
    });

    //pour les diagrammes
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
