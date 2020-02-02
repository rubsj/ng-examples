import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';

import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    outlet: 'Dashboard'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
