import { Component, OnInit } from '@angular/core';
import {Stats} from "../../models/stats";
import {AuthService} from "../../services/auth/auth-service.service";
import {Router} from "@angular/router";
import {DatasService} from "../../services/datas/datas.service";

@Component({
  selector: 'app-stat-card',
  templateUrl: './stat-card.component.html',
  styleUrls: ['./stat-card.component.css']
})
export class StatCardComponent implements OnInit {

  loader = true;
  stats!: Stats;

  constructor(private authService: AuthService, private router: Router, private datasService: DatasService) {}

  ngOnInit(): void {
    this.datasService.getStats().subscribe(data => {
      this.stats = data;
      this.loader = false
    });
  }

}
