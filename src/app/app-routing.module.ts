import { GlobalComponent } from './global/global.component';
import { BarComponent } from './bar/bar.component';
import { HighChartComponent } from './high-chart/high-chart.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'', redirectTo:'dashboard', pathMatch:'full'},
  {path:'dashboard', component: DashboardComponent},
  {path:'highchart', component: HighChartComponent},
  {path:'bar', component: BarComponent},
  {path:'global', component:GlobalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
