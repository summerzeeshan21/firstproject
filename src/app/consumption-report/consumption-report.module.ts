import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsumptionReportPageRoutingModule } from './consumption-report-routing.module';

import { ConsumptionReportPage } from './consumption-report.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsumptionReportPageRoutingModule
  ],
  declarations: [ConsumptionReportPage]
})
export class ConsumptionReportPageModule {}
