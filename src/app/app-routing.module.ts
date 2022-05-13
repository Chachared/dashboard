import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { SigninComponent } from './components/signin/signin.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';


const routes: Routes = [
  {path: 'login', component: SigninComponent},
  {path: '', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
