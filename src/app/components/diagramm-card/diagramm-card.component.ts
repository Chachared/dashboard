import { Component, OnInit } from '@angular/core';
import { Chart, ChartDataset, ChartOptions, ChartType } from 'chart.js';
import {Stats} from "../../models/stats";
import {AuthService} from "../../services/auth/auth-service.service";
import {Router} from "@angular/router";
import {DatasService} from "../../services/datas/datas.service";

@Component({
  selector: 'app-diagramm-card',
  templateUrl: './diagramm-card.component.html',
  styleUrls: ['./diagramm-card.component.css'],
})
export class DiagrammCardComponent implements OnInit {

  //pour récupérer les données
  loader = true;
  stats!: Stats;

  //pour les diagrammes
  type!: ChartType;
  labels!: string[];
  datasets!: ChartDataset[];
  options!: ChartOptions;

  constructor(private authService: AuthService, private router: Router, private datasService: DatasService) {}

  ngOnInit(): void {
    //pour récupérer les données
    this.datasService.getStats().subscribe(data => {
      this.stats = data;
      this.loader = false
    });
    //pour le diagramme
    this.type = 'pie';

    this.labels = ['nombre de nouveaux clients', 'nombre de clients inscrits depuis plus de 2 semaines'];

    this.datasets = [
      {
        label: 'Ratio de nouveaux clients',
        data: [this.stats.nbInvoices, 80],
        backgroundColor: ['Red', 'Orange'],
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
          text: 'Nouveaux inscrits depuis 2 semaines',
        },
      },
    };
  }
}
