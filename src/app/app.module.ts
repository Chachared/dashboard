import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { AsideNavComponent } from './components/aside-nav/aside-nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { StatCardComponent } from './components/stat-card/stat-card.component';
import { ProductTableComponent } from './components/product-table/product-table.component';
import { DiagrammCardComponent } from './components/diagramm-card/diagramm-card.component';
import { DatePickerComponent } from './components/date-picker/date-picker.component';
import { NgChartsModule } from 'ng2-charts';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    AsideNavComponent,
    FooterComponent,
    StatCardComponent,
    ProductTableComponent,
    DiagrammCardComponent,
    DatePickerComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgChartsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
