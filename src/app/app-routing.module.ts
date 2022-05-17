import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { SigninComponent } from './components/signin/signin.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import {AuthGuard} from "./guards/auth.guard";


const routes: Routes = [
  {path: 'login', component: SigninComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
