import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddStockPageRoutingModule } from './add-stock-routing.module';

import { AddStockPage } from './add-stock.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    AddStockPageRoutingModule
  ],
  declarations: [AddStockPage]
})
export class AddStockPageModule {}
