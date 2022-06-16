import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/guard/auth-guard';

const routes: Routes = [

  {
    // canActivate: [AuthGuard],
    path: '',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'add-item',
    loadChildren: () => import('./add-item/add-item.module').then(m => m.AddItemPageModule)
  },
  {
    path: 'add-stock',
    loadChildren: () => import('./add-stock/add-stock.module').then(m => m.AddStockPageModule)
  },
  {
    path: 'add-consumption',
    loadChildren: () => import('./add-consumption/add-consumption.module').then(m => m.AddConsumptionPageModule)
  },
  {
    path: 'stock',
    loadChildren: () => import('./stock/stock.module').then(m => m.StockPageModule)
  },
 
  {
    path: 'consumption-report',
    loadChildren: () => import('./consumption-report/consumption-report.module').then( m => m.ConsumptionReportPageModule)
  },
  {
    path: 'users',
    loadChildren: () => import('./users/users.module').then( m => m.UsersPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
  },
 
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
