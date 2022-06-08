import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsumptionReportPage } from './consumption-report.page';

const routes: Routes = [
  {
    path: '',
    component: ConsumptionReportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsumptionReportPageRoutingModule {}
