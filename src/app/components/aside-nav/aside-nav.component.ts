import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth/auth-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-aside-nav',
  templateUrl: './aside-nav.component.html',
  styleUrls: ['./aside-nav.component.css']
})
export class AsideNavComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  logout(): void {
    this.authService.doLogout();
    this.router.navigate(['/login'])
  }
}
