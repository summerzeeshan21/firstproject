import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddConsumptionPageRoutingModule } from './add-consumption-routing.module';

import { AddConsumptionPage } from './add-consumption.page';
import { HttpClient } from 'node_modules/@angular/common/http/http';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    AddConsumptionPageRoutingModule
  ],
  declarations: [AddConsumptionPage]
})
export class AddConsumptionPageModule {}
