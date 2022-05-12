import { NgModule } from '@angular/core';
import {RouterModule, RouterOutlet, Routes} from '@angular/router';
import {DashboardComponent} from "./views/dashboard/dashboard.component";
import {AppComponent} from "./app.component";

const routes: Routes = [
  {path: 'dashboard', component: RouterOutlet}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
