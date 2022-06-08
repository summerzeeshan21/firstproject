import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddConsumptionPage } from './add-consumption.page';

const routes: Routes = [
  {
    path: '',
    component: AddConsumptionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddConsumptionPageRoutingModule {}
